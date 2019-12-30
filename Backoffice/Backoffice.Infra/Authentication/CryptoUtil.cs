using System.Security.Cryptography;
using System.Text;

namespace Backoffice.Infra.Authentication
{
    internal sealed class CryptoUtil
    {
        private HashAlgorithm algorithm;

        public CryptoUtil(HashAlgorithm algorithm)
        {
            this.algorithm = algorithm;
        }

        public bool VerificarSenha(string senhaDigitada, string senhaCadastrada)
        {
            if (string.IsNullOrEmpty(senhaDigitada))
                return false;

            if (string.IsNullOrEmpty(senhaCadastrada))
                return false;

            var hashSenhaDigitada = CriptografarSenha(senhaDigitada);

            return hashSenhaDigitada.Equals(senhaCadastrada);
        }

        public string CriptografarSenha(string senha)
        {
            var encodedValue = Encoding.UTF8.GetBytes(senha);
            var encryptedPassword = algorithm.ComputeHash(encodedValue);
            var sb = new StringBuilder();
            foreach (var caracter in encryptedPassword)
            {
                sb.Append(caracter.ToString("X2"));
            }

            return sb.ToString();
        }
    }
}
