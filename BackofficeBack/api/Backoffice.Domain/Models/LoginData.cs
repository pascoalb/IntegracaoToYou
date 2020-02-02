using System;
using System.Collections.Generic;
using System.Text;

namespace Backoffice.Domain.Models
{
    public class LoginData
    {
        public string Token { get; set; }

        public DateTime? DataCriacao { get; set; }

        public DateTime? DataExpiracao { get; set; }
        public bool IsAutenticado { get; set; }
    }
}
