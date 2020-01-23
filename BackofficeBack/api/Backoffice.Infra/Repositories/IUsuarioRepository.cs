using System.Threading.Tasks;
using Backoffice.Domain.Models;

namespace Backoffice.Infra.Repositories
{
    public interface IUsuarioRepository : IBaseRepository<Usuario>
    {
        Task<Usuario> BuscarUsuarioPorLoginESenhaAsync(string login, string senha);

        Task<Usuario> BuscarUsuarioPorLoginAsync(string login);
    }
}
