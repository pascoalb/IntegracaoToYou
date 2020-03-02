using System;
using System.Collections.Generic;
using System.Text;

namespace Backoffice.Infra.Repositories.Scripts
{
    public class RedeScript
    {
        internal static string BuscarRedePorIdeGeracao =>
              @"CALL RETORNA_REDE_POR_GERACAO (@GERACAO, @IDUSUARIO)";
    }
}
