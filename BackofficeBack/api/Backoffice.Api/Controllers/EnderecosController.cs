using System;
using System.Threading.Tasks;
using Backoffice.Domain.Models;
using Backoffice.Infra.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Backoffice.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowAll")]
    [Authorize("Bearer")]
    public class EnderecosController : ControllerBase
    {
        private readonly IEnderecoService enderecoService;

        public EnderecosController(IEnderecoService enderecoService)
        {
            this.enderecoService = enderecoService;
        }

        [HttpPost]
        public async Task<IActionResult> InserirEnderecoAsync(Endereco endereco)
        {
            try
            {
                var novoEndereco = await enderecoService.InserirEnderecoAsync(endereco);
                return Created("", novoEndereco);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}