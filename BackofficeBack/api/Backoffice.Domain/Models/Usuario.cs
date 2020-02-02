using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backoffice.Domain.Models
{
    [Table("USUARIO")]
    public class Usuario
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID")]
        public int Id { get; set; }
        [Column("ID_INDICACAO")]
        public int IdIndicacao { get; set; }

        [Column("NOME_COMPLETO")]
        public string NomeCompleto { get; set; }

        [Column("EMAIL")]
        public string Email { get; set; }

        [Column("TELEFONE")]
        public string Telefone { get; set; }

        [Column("CELULAR")]
        public string Celular { get; set; }

        [Column("DATA_NASCIMENTO")]
        public DateTime DataNascimento { get; set; }

        [Column("CPF")]
        public string Cpf { get; set; }

        [Column("RG")]
        public string Rg { get; set; }

        [Column("ORGAO_EMISSOR_RG")]
        public string OrgaoEmissorRg { get; set; }

        [Column("SEXO")]
        public string Sexo { get; set; }

        [Column("ESTADO_CIVIL")]
        public string EstadoCivil { get; set; }

        [Column("NOME_MAE")]
        public string NomeMae { get; set; }

        [Column("LOGIN")]
        public string Login { get; set; }

        [Column("SENHA")]
        public string Senha { get; set; }

        [Column("SENHA_FINANCEIRA")]
        public string SenhaFinanceira { get; set; }


        [NotMapped]
        public IEnumerable<Endereco> Enderecos { get; set; }

        [NotMapped]
        public LoginData LoginData { get; set; }

        public void LimparSenhas()
        {
            Senha = null;
            SenhaFinanceira = null;
        }
    }
}
