using Backoffice.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Backoffice.Infra.Repositories;
using Dapper;

namespace Backoffice.Infra.Services.Support
{
    public class PlanosSevice : IPlanosService
    {
        private readonly IPlanosRepository planosRepository;
        private readonly IUsuarioRepository usuarioRepository;

        public PlanosSevice(IPlanosRepository planosRepository, IUsuarioRepository usuarioRepository)
        {
            this.planosRepository = planosRepository;
            this.usuarioRepository = usuarioRepository;
        }

        public async Task<List<Plano>> BuscarPlanosAsync()
        {
            var result = await planosRepository.FindAllAsync();
            return result.AsList();
        }

        public async Task<Plano> BuscarPlanosUsuarioAsync(int usuarioId)
        {
            var usuarioResult = await usuarioRepository.FindOneAsync(new Usuario { Id = usuarioId });

            if(usuarioResult != null){
                var result = await planosRepository.FindOneAsync(new Plano { Id = int.Parse(usuarioResult.IdPlano) });
                return result;
            }

            return null;
        }
    }
}
