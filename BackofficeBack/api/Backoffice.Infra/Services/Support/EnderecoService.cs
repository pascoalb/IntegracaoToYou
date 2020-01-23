using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Backoffice.Domain.Models;
using Backoffice.Infra.Repositories;

namespace Backoffice.Infra.Services.Support
{
    public class EnderecoService : IEnderecoService
    {
        private readonly IEnderecoRepository enderecoRepository;
        
        public EnderecoService(IEnderecoRepository enderecoRepository)
        {
            this.enderecoRepository = enderecoRepository;
        }

        public async Task<Endereco> BuscarEnderecoPorIdAsync(int enderecoId)
        {
            var endereco = await enderecoRepository.FindOneAsync(new Endereco() { Id = enderecoId });
            return endereco;
        }

        public async Task<IEnumerable<Endereco>> BuscarEnderecosAsync()
        {
            var enderecos = await enderecoRepository.FindAllAsync();
            return enderecos;
        }

        public async Task<IEnumerable<Endereco>> BuscarEnderecosPorUsuarioAsync(int usuarioId)
        {
            var enderecos = await enderecoRepository.BuscarEnderecosPorUsuarioAsync(usuarioId);
            return enderecos;
        }

        public async Task ExcluirEnderecoAsync(Endereco endereco)
        {
            await enderecoRepository.DeleteAsync(endereco);
        }

        public async Task<Endereco> InserirEnderecoAsync(Endereco endereco)
        {
            await enderecoRepository.InsertAsync(endereco);
            return endereco;
        }
    }
}