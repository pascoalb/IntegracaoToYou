namespace Backoffice.Infra.Repositories.Scripts
{
    internal static class EnderecoScripts
    {
        internal static string BuscarEnderecosPorUsuarioScript => 
            @"
                SELECT 
                    ID Id,
                    ID_USUARIO UsuarioId,
                    CEP Cep,
                    LOGRADOURO Logradouro,
                    NUMERO Numero,
                    COMPLEMENTO Complemento,
                    BAIRRO Bairro,
                    CIDADE Cidade,
                    ESTADO Estado,
                    PAIS Pais
                FROM ENDERECO
                WHERE ID_USUARIO = @UsuarioId
            ";
    }
}