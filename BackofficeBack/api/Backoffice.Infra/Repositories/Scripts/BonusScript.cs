using System;
using System.Collections.Generic;
using System.Text;

namespace Backoffice.Infra.Repositories.Scripts
{
    public class BonusScript
    {
        internal static string BuscarBonusDireto =>
               @"SELECT 
                *
                FROM BONUS_IND_DIRETA
                WHERE ID_USUARIO_BONUS = @ID";
        internal static string BuscarBonusIndireto =>
                @"SELECT 
                *
                FROM BONUS_IND_INDIRETA
                WHERE ID_USUARIO_BONUS = @ID";

    }
}
