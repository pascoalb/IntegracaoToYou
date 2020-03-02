using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Backoffice.Domain.Models;


namespace Backoffice.Infra.Services
{
    public interface IPlanosService
    {
        Task<List<Plano>> BuscarPlanosAsync();
        Task<Plano> BuscarPlanosUsuarioAsync(int usuarioId);
    }
}
