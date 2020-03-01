using Backoffice.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Backoffice.Infra.Repositories;

namespace Backoffice.Infra.Services.Support
{
    public class BonusService : IBonusService
    {
        private readonly IBonusDiretoRepository bonusDiretoRepository;
        private readonly IBonusIndiretoRepository bonusIndiretoRepository;

        public BonusService(IBonusDiretoRepository bonusDiretoRepository, IBonusIndiretoRepository bonusIndiretoRepository)
        {
            this.bonusDiretoRepository = bonusDiretoRepository;
            this.bonusIndiretoRepository = bonusIndiretoRepository;
        }

        public async Task<List<BonusDireto>> BuscarBonusDiretoPorUsuarioIdAsync(int usuarioId)
        {
            var result = await bonusDiretoRepository.BuscarBonusDiretoPorUsuarioIdAsync(usuarioId);
            return result;
        }

        public async Task<List<BonusIndireto>> BuscarBonusIndiretoPorUsuarioIdAsync(int usuarioId)
        {
            var result = await bonusIndiretoRepository.BuscarBonusIndiretoPorUsuarioIdAsync(usuarioId);
            return result;
        }
    }
}
