using System.Collections.Generic;
using System.Threading.Tasks;
using Backoffice.Domain.Models;

namespace Backoffice.Infra.Repositories
{
    public interface IEnderecoRepository : IBaseRepository<Endereco>
    {
         Task<IEnumerable<Endereco>> BuscarEnderecosPorUsuarioAsync(int usuarioId);
    }
}