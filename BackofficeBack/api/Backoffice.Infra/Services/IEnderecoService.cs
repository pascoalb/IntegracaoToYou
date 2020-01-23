using System.Collections.Generic;
using System.Threading.Tasks;
using Backoffice.Domain.Models;

namespace Backoffice.Infra.Services
{
    public interface IEnderecoService
    {
         Task<Endereco> InserirEnderecoAsync(Endereco endereco);

         Task<IEnumerable<Endereco>> BuscarEnderecosPorUsuarioAsync(int usuarioId);

         Task ExcluirEnderecoAsync(Endereco endereco);

         Task<IEnumerable<Endereco>> BuscarEnderecosAsync();

         Task<Endereco> BuscarEnderecoPorIdAsync(int enderecoId);
    }
}