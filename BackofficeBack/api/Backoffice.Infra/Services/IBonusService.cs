using Backoffice.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Backoffice.Infra.Services
{
    public interface IBonusService
    {
        Task<List<BonusDireto>> BuscarBonusDiretoPorUsuarioIdAsync(int usuarioId);
        Task<List<BonusIndireto>> BuscarBonusIndiretoPorUsuarioIdAsync(int usuarioId);
    }
}
