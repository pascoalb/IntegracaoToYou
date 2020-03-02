using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Backoffice.Domain.Models;
using Backoffice.Infra.Services;
using System.Threading.Tasks;
using System;

namespace Backoffice.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAll")]
    [Authorize("Bearer")]
    public class PlanosController : ControllerBase
    {
        private readonly IPlanosService planosService;
        public PlanosController(IPlanosService planosService)
        {
            this.planosService = planosService;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> BuscarPlanosAsync()
        {
            try
            {
                var planos = await planosService.BuscarPlanosAsync();
                return Ok(planos);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [AllowAnonymous]
        [HttpGet("{usuarioId}")]
        public async Task<IActionResult> BuscarPlanosPorUsuarioIdAsync(int usuarioId)
        {
            try
            {
                var plano = await planosService.BuscarPlanosUsuarioAsync(usuarioId);
                if (plano == null)
                    return NotFound();

                return Ok(plano);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}