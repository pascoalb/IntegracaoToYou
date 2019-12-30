using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Principal;
using System.Threading.Tasks;
using Backoffice.Domain.Models;
using Backoffice.Infra.Authentication;
using Backoffice.Infra.Repositories;
using Microsoft.IdentityModel.Tokens;

namespace Backoffice.Infra.Services.Support
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository usuarioRepository;

        private readonly SigningConfigurations signingConfigurations;

        private readonly TokenConfigurations tokenConfigurations;

        private readonly CryptoUtil cryptoUtil;

        public UsuarioService(IUsuarioRepository usuarioRepository, SigningConfigurations signingConfigurations, TokenConfigurations tokenConfigurations)
        {
            this.usuarioRepository = usuarioRepository;
            this.signingConfigurations = signingConfigurations;
            this.tokenConfigurations = tokenConfigurations;
            
            cryptoUtil = new CryptoUtil(SHA512.Create());
        }

        public async Task<Usuario> AtualizarUsuarioAsync(Usuario usuario)
        {
            await usuarioRepository.UpdateAsync(usuario);
            return usuario;
        }

        public async Task<Usuario> AutenticarUsuarioAsync(Usuario usuario)
        {
            ValidarDadosLogin(usuario);
            usuario.Senha = cryptoUtil.CriptografarSenha(usuario.Senha);
            var usuarioResult = await BuscarUsuarioPorLoginESenhaAsync(usuario.Login, usuario.Senha);
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
            usuario.Token = token;
            usuario.DataCriacao = dataCriacao;
            usuario.DataExpiracao = dataExpiracao;
            usuario.IsAutenticado = true;        
        }

        private void ValidarDadosLogin(Usuario usuario)
        {
            if (usuario == null)
                throw new ArgumentException("Login/Senha não informados.");

            if (string.IsNullOrEmpty(usuario.Login) || string.IsNullOrEmpty(usuario.Senha))
                throw new ArgumentException("Login/Senha não informados.");
        }

        public async Task<Usuario> BuscarUsuarioAsync(int id)
        {
            var usuario = await usuarioRepository.FindOneAsync(new Usuario() { Id = id });
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
            return usuarios;
        }

        public async Task ExcluirUsuarioAsync(Usuario usuario)
        {
            await usuarioRepository.DeleteAsync(usuario);
        }

        public async Task<Usuario> InserirUsuarioAsync(Usuario usuario)
        {
            usuario.Senha = cryptoUtil.CriptografarSenha(usuario.Senha);
            usuario.SenhaFinanceira = cryptoUtil.CriptografarSenha(usuario.SenhaFinanceira);
            await usuarioRepository.InsertAsync(usuario);
            usuario.LimparSenhas();
            return usuario;
        }
    }
}
