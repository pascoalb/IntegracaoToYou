using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Backoffice.Domain.Models
{
    [Table("PLANOS")]
    public class Plano
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID_PLANO")]
        public int Id { get; set; }
        [Column("DESCRICAO")]
        public string Descricao { get; set; }
        [Column("VALOR_PLANO")]
        public decimal Valor { get; set; }
        [Column("PERCENTUAL_IND_DIRETA")]
        public decimal PercentualIndDireta { get; set; }
        [Column("NIVEL_IND_INDIRETA")]
        public int NivelIndIndireta { get; set; }
        [Column("NIVEL_BONUS_RESIDUAL")]
        public int NivelBonusResidual { get; set; }
        [Column("PERCENTUAL_BONUS_RENOVACAO")]
        public decimal PercentualBonusRenovacao { get; set; }
        [Column("PERCENTUAL_BONUS_VENDA")]
        public decimal PercentualBonusVenda { get; set; }
        [Column("NIVEL_BONUS_UNILEVEL")]
        public int NivelBonusUnilevel { get; set; }
        [Column("CARREIRA")]
        public string Carreira { get; set; }
    }
}





