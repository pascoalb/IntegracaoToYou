namespace Backoffice.Infra.Repositories.Scripts
{
    internal static class UsuarioScripts
    {
        internal static string BuscarUsuarioPorLoginScript =>
            @"SELECT 
                ID Id,
                NOME_COMPLETO NomeCompleto,
                EMAIL Email,
                TELEFONE Telefone,
                CELULAR Celular,
                DATA_NASCIMENTO DataNascimento,
                RG Rg,
                ORGAO_EMISSOR_RG OrgaoEmissorRg,
                SEXO Sexo,
                ESTADO_CIVIL EstadoCivil,
                NOME_MAE NomeMae,
                LOGIN Login
            FROM USUARIO WITH (NOLOCK)
            WHERE LOGIN = @Login";

        internal static string BuscarUsuarioPorLoginESenhaScript =>
            $@"{BuscarUsuarioPorLoginScript} 
                AND SENHA = @Senha";
    }
}
