using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backoffice.Domain.Models
{
    [Table("ENDERECO")]
    public class Endereco
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID")]
        public int Id { get; set; }


        [Column("ID_USUARIO")]
        public int UsuarioId { get; set; }

        [Column("CEP")]
        public string Cep { get; set; }

        [Column("LOGRADOURO")]
        public string Logradouro { get; set; }

        [Column("NUMERO")]
        public string Numero { get; set; }

        [Column("COMPLEMENTO")]
        public string Complemento { get; set; }

        [Column("BAIRRO")]
        public string Bairro { get; set; }

        [Column("CIDADE")]
        public string Cidade { get; set; }

        [Column("ESTADO")]
        public string Estado { get; set; }

        [Column("PAIS")]
        public string Pais { get; set; }

        [NotMapped]
        public string EnderecoCompleto 
        { 
            get
            {
                return string.Empty;
            }
        }
    }
}
