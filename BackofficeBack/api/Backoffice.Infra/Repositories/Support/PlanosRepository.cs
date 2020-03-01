using Backoffice.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Backoffice.Infra.Repositories.Support
{
    public class PlanosRepository : BaseRepository<Plano>, IPlanosRepository
    {
        public PlanosRepository(IConnectionFactory connectionFactory) : base(connectionFactory)
        {
        }
    }
}
