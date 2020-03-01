using System.Collections.Generic;
using System.Threading.Tasks;
using Backoffice.Domain.Models;

namespace Backoffice.Infra.Repositories
{
    public interface IBonusDiretoRepository : IBaseRepository<BonusDireto>
    {
        Task<List<BonusDireto>> BuscarBonusDiretoPorUsuarioIdAsync(int usuarioId);
    }

    public interface IBonusIndiretoRepository : IBaseRepository<BonusIndireto>
    {
        Task<List<BonusIndireto>> BuscarBonusIndiretoPorUsuarioIdAsync(int idusuarioId);
    }
}
