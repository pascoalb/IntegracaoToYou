using System.Collections.Generic;
using System.Threading.Tasks;
using Backoffice.Domain.Models;
using Backoffice.Infra.Repositories.Scripts;
using Dapper;

namespace Backoffice.Infra.Repositories.Support
{
    public class EnderecoRepository : BaseRepository<Endereco>, IEnderecoRepository
    {
        public EnderecoRepository(IConnectionFactory connectionFactory) : base(connectionFactory)
        {
        }

        public async Task<IEnumerable<Endereco>> BuscarEnderecosPorUsuarioAsync(int usuarioId)
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                var sql = EnderecoScripts.BuscarEnderecosPorUsuarioScript;
                var enderecos = await connection.QueryAsync<Endereco>(sql, new { UsuarioId = usuarioId });
                return enderecos;
            }
        }
    }
}