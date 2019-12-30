using System.Data;

namespace Backoffice.Infra.Repositories
{
    public interface IConnectionFactory
    {
        IDbConnection CreateConnectionOpened();
    }
}
