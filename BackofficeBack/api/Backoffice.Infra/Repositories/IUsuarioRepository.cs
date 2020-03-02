using System.Collections.Generic;
using System.Threading.Tasks;
using Backoffice.Domain.Models;

namespace Backoffice.Infra.Repositories
{
    public interface IUsuarioRepository : IBaseRepository<Usuario>
    {
        Task<Usuario> BuscarUsuarioPorLoginESenhaAsync(string login, string senha);

        Task<Usuario> BuscarUsuarioPorLoginAsync(string login);
        Task<Usuario> BuscarUsuarioPorCpfAsync(string cpf);

        Task<List<Usuario>> BuscarRedeUsuarioAsync(int geracao, int usuarioId);
    }
}
