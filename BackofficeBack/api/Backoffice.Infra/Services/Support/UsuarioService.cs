using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Principal;
using System.Threading.Tasks;
using Backoffice.Domain.Dtos;
using Backoffice.Domain.Models;
using Backoffice.Infra.Authentication;
using Backoffice.Infra.Repositories;
using Microsoft.IdentityModel.Tokens;

namespace Backoffice.Infra.Services.Support
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository usuarioRepository;

        private readonly IEnderecoService enderecoService;

        private readonly SigningConfigurations signingConfigurations;

        private readonly TokenConfigurations tokenConfigurations;

        private readonly CryptoUtil cryptoUtil;

        public UsuarioService(IUsuarioRepository usuarioRepository,
            SigningConfigurations signingConfigurations, TokenConfigurations tokenConfigurations,
            IEnderecoService enderecoService)
        {
            this.usuarioRepository = usuarioRepository;
            this.enderecoService = enderecoService;
            this.signingConfigurations = signingConfigurations;
            this.tokenConfigurations = tokenConfigurations;

            cryptoUtil = new CryptoUtil(SHA512.Create());
        }

        public async Task<Usuario> AtualizarUsuarioAsync(Usuario usuario)
        {
            await usuarioRepository.UpdateAsync(usuario);
            return usuario;
        }

        public async Task<Usuario> AutenticarUsuarioAsync(UsuarioAutenticacaoDto usuarioAutenticacaoDto)
        {
            ValidarDadosLogin(usuarioAutenticacaoDto);
            usuarioAutenticacaoDto.Senha = cryptoUtil.CriptografarSenha(usuarioAutenticacaoDto.Senha);
            var usuarioResult = await BuscarUsuarioPorLoginESenhaAsync(usuarioAutenticacaoDto.Login, usuarioAutenticacaoDto.Senha);
            if (usuarioResult == null)
                throw new InvalidOperationException("Login/Senha inválidos ou não fornecidos.");

            PreencherInformacoesTokenAcesso(usuarioResult);
            return usuarioResult;
        }

        private void PreencherInformacoesTokenAcesso(Usuario usuario)
        {
            ClaimsIdentity identity = new ClaimsIdentity(
                new GenericIdentity(usuario.Login, "Login"),
                new[] {
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString("N")),
                    new Claim(JwtRegisteredClaimNames.UniqueName, usuario.Login)
                });

            DateTime dataCriacao = DateTime.Now;
            DateTime dataExpiracao = dataCriacao +
                                     TimeSpan.FromSeconds(tokenConfigurations.Seconds);
            var handler = new JwtSecurityTokenHandler();
            var securityToken = handler.CreateToken(new SecurityTokenDescriptor
            {
                Issuer = tokenConfigurations.Issuer,
                Audience = tokenConfigurations.Audience,
                SigningCredentials = signingConfigurations.SigningCredentials,
                Subject = identity,
                NotBefore = dataCriacao,
                Expires = dataExpiracao
            });

            var token = handler.WriteToken(securityToken);
            usuario.LoginData = new LoginData
            {
                Token = token,
                DataCriacao = dataCriacao,
                DataExpiracao = dataExpiracao,
                IsAutenticado = true
            };
        }

        private void ValidarDadosLogin(UsuarioAutenticacaoDto usuarioAutenticacaoDto)
        {
            if (usuarioAutenticacaoDto == null)
                throw new ArgumentException("Login/Senha não informados.");

            if (string.IsNullOrEmpty(usuarioAutenticacaoDto.Login) || string.IsNullOrEmpty(usuarioAutenticacaoDto.Senha))
                throw new ArgumentException("Login/Senha não informados.");
        }

        public async Task<Usuario> BuscarUsuarioAsync(int id)
        {
            var usuario = await usuarioRepository.FindOneAsync(new Usuario() { Id = id });
            if (usuario != null)
            {
                usuario.Enderecos = await enderecoService.BuscarEnderecosPorUsuarioAsync(usuario.Id);
                usuario.LimparSenhas();
            }

            return usuario;
        }

        public async Task<Usuario> BuscarUsuarioPorLoginAsync(string login)
        {
            var usuario = await usuarioRepository.BuscarUsuarioPorLoginAsync(login);
            return usuario;
        }

        public async Task<Usuario> BuscarUsuarioPorLoginESenhaAsync(string login, string senha)
        {
            var usuario = await usuarioRepository.BuscarUsuarioPorLoginESenhaAsync(login, senha);
            return usuario;
        }

        public async Task<IEnumerable<Usuario>> BuscarUsuariosAsync()
        {
            var usuarios = await usuarioRepository.FindAllAsync();
            usuarios.ToList().ForEach(u =>
            {
                u.LimparSenhas();
                u.Enderecos = enderecoService.BuscarEnderecosPorUsuarioAsync(u.Id).Result;
            });

            return usuarios;
        }

        public async Task ExcluirUsuarioAsync(Usuario usuario)
        {
            await usuarioRepository.DeleteAsync(usuario);
        }

        public async Task<Usuario> InserirUsuarioAsync(Usuario usuario)
        {
            await ValidarCpfUsuarioAsync(usuario);
            await ValidarLoginUsuarioAsync(usuario);
            usuario.Senha = cryptoUtil.CriptografarSenha(usuario.Senha);
            usuario.SenhaFinanceira = cryptoUtil.CriptografarSenha(usuario.SenhaFinanceira);
            await usuarioRepository.InsertAsync(usuario);
            if(usuario.Enderecos != null)
                await InserirEnderecosUsuarioAsync(usuario);
            usuario.LimparSenhas();
            return usuario;
        }

        private async Task InserirEnderecosUsuarioAsync(Usuario usuario)
        {
            foreach (var endereco in usuario.Enderecos)
            {
                endereco.UsuarioId = usuario.Id;
                await enderecoService.InserirEnderecoAsync(endereco);
            }
        }

        private async Task ValidarLoginUsuarioAsync(Usuario usuario)
        {
            var result = await usuarioRepository.BuscarUsuarioPorLoginAsync(usuario.Login);
            if (result != null)
                throw new ArgumentException("Login já cadastrado.");
        }

        private async Task ValidarCpfUsuarioAsync(Usuario usuario)
        {
            var result = await usuarioRepository.BuscarUsuarioPorCpfAsync(usuario.Cpf);
            if (result != null)
                throw new ArgumentException("CPF já cadastrado.");
        }

        public async Task<List<Usuario>> BuscarRedeUsuarioAsync(int geracao, int usuarioId)
        {
            var result = await usuarioRepository.BuscarRedeUsuarioAsync(geracao, usuarioId);
            return result;
        }

        public async Task<string> CriptografarSenha(string senha)
        {
            return cryptoUtil.CriptografarSenha(senha);
        }
    }
}
