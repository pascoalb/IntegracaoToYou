using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Backoffice.Domain.Models
{
    [Table("BONUS_IND_DIRETA")]
    public class BonusDireto
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID")]
        public int Id { get; set; }
        [Column("ID_USUARIO_BONUS")]
        public int IdUsuarioBonus { get; set; }
        [Column("VALOR_BONUS")]
        public decimal Valor { get; set; }
        [Column("ID_USUARIO_BONUS")]
        public int IdUsuarioGerador { get; set; }
        [Column("FL_PGTO_CONFIRMADO")]
        public string FlagPagamentoConfirmado { get; set; }
    }

    [Table("BONUS_IND_INDIRETA")]
    public class BonusIndireto
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID")]
        public int Id { get; set; }
        [Column("ID_USUARIO_BONUS")]
        public int IdUsuarioBonus { get; set; }
        [Column("VALOR_BONUS")]
        public decimal Valor { get; set; }
        [Column("ID_USUARIO_BONUS")]
        public int IdUsuarioGerador { get; set; }
        [Column("FL_PGTO_CONFIRMADO")]
        public string FlagPagamentoConfirmado { get; set; }
    }
}
