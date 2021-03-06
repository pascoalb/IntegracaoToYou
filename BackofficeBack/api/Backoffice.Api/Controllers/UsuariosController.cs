﻿using System;
using System.Threading.Tasks;
using Backoffice.Domain.Dtos;
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
    public class UsuariosController : ControllerBase
    {
        private readonly IUsuarioService usuarioService;

        public UsuariosController(IUsuarioService usuarioService)
        {
            this.usuarioService = usuarioService;
        }

        [AllowAnonymous]
        [HttpGet("VerificarUsuario/{login}")]
        public async Task<IActionResult> VerificarUsuarioAsync(string login)
        {
            try
            {
                var usuario = await usuarioService.BuscarUsuarioPorLoginAsync(login);
                if(usuario == null)    
                    throw new InvalidOperationException("Indicação inválida.");
                return Ok(usuario.Id);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> CadastrarUsuarioAsync([FromBody] Usuario usuario)
        {
            try
            {
                var novoUsuario = await usuarioService.InserirUsuarioAsync(usuario);
                return Created("", novoUsuario);
            }
            catch (Exception e)
             {
                return BadRequest(e);
            }
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync([FromBody] UsuarioAutenticacaoDto usuario)
        {
            try
            {
                var usuarioAutenticado = await usuarioService.AutenticarUsuarioAsync(usuario);
                return Ok(usuarioAutenticado);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet]
        public async Task<IActionResult> BuscarUsuariosAsync()
        {
            try
            {
                var usuarios = await usuarioService.BuscarUsuariosAsync();
                return Ok(usuarios);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> BuscarUsuarioPorIdAsync(int id)
        {
            try
            {
                var usuario = await usuarioService.BuscarUsuarioAsync(id);
                if (usuario == null)
                    return NotFound();
                
                return Ok(usuario);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [AllowAnonymous]
        [HttpGet("BuscarRedeUsuario/{geracao}/{usuarioId}")]
        public async Task<IActionResult> BuscarRedeUsuarioAsync(int geracao, int usuarioId)
        {
            try
            {
                var usuarios = await usuarioService.BuscarRedeUsuarioAsync(geracao, usuarioId);
                return Ok(usuarios);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [AllowAnonymous]
        [HttpGet("CriptografarSenha/{senha}")]
        public async Task<IActionResult> CriptografarSenha(string senha)
        {
            try
            {
                var result = await usuarioService.CriptografarSenha(senha);
                return Ok(result);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}