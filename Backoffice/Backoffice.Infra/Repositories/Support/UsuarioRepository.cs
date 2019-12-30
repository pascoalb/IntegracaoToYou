using System.Threading.Tasks;
using Backoffice.Domain.Models;
using Backoffice.Infra.Repositories.Scripts;
using Dapper;

namespace Backoffice.Infra.Repositories.Support
{
    public class UsuarioRepository : BaseRepository<Usuario>, IUsuarioRepository
    {
        public UsuarioRepository(IConnectionFactory connectionFactory) : base(connectionFactory)
        {
        }

        public async Task<Usuario> BuscarUsuarioPorLoginAsync(string login)
        {
            using (var connection = factory.CreateConnectionOpened())
            {
                var sql = UsuarioScripts.BuscarUsuarioPorLoginScript;
                var result = await connection.QueryFirstOrDefaultAsync<Usuario>(sql, new { Login = login });
                return result;
            }
        }

        public async Task<Usuario> BuscarUsuarioPorLoginESenhaAsync(string login, string senha)
        {
            using (var connection = factory.CreateConnectionOpened())
            {
                var sql = UsuarioScripts.BuscarUsuarioPorLoginESenhaScript;
                var result = await connection.QueryFirstOrDefaultAsync<Usuario>(sql, new { Login = login, Senha = senha });
                return result;
            }
        }
    }
}
