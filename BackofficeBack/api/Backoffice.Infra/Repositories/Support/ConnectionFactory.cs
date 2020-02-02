using System.Data;
using System.Data.SqlClient;
using Dapper.FastCrud;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;

namespace Backoffice.Infra.Repositories.Support
{
    public sealed class ConnectionFactory : IConnectionFactory
    {
        private readonly IConfiguration configuration;

        public ConnectionFactory(IConfiguration configuration)
        {
            this.configuration = configuration;
            OrmConfiguration.DefaultDialect = SqlDialect.MySql;
        }

        public IDbConnection CreateConnectionOpened()
        {
            var connection = new MySqlConnection(ConnectionString);
            connection.Open();
            return connection;
        }

        public string ConnectionString => configuration.GetConnectionString("SqlConnection");
    }
}
