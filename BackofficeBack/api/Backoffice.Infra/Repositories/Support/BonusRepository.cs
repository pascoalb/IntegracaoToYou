using Backoffice.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Backoffice.Infra.Repositories.Scripts;
using Dapper;

namespace Backoffice.Infra.Repositories.Support
{
    public class BonusDiretoRepository : BaseRepository<BonusDireto>, IBonusDiretoRepository
    {
        public BonusDiretoRepository(IConnectionFactory connectionFactory) : base(connectionFactory)
        {
        }
        public async Task<List<BonusDireto>> BuscarBonusDiretoPorUsuarioIdAsync(int usuarioId)
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                var sql = BonusScript.BuscarBonusDireto;
                var result = await connection.QueryAsync<BonusDireto>(sql, new { ID = usuarioId });
                return result.AsList();
            }
        }
    }

    public class BonusIndiretoRepository : BaseRepository<BonusIndireto>, IBonusIndiretoRepository
    {
        public BonusIndiretoRepository(IConnectionFactory connectionFactory) : base(connectionFactory)
        {
        }
        public async Task<List<BonusIndireto>> BuscarBonusIndiretoPorUsuarioIdAsync(int usuarioId)
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                var sql = BonusScript.BuscarBonusIndireto;
                var result = await connection.QueryAsync<BonusIndireto>(sql, new { ID = usuarioId });
                return result.AsList();
            }
        }
    }
}
