using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Dapper.FastCrud;

namespace Backoffice.Infra.Repositories.Support
{
    public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
    {
        protected readonly IConnectionFactory connectionFactory;

        public BaseRepository(IConnectionFactory connectionFactory)
        {
            this.connectionFactory = connectionFactory;
        }

        public bool Delete(TEntity entity)
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                return connection.Delete(entity);
            }
        }

        public async Task<bool> DeleteAsync(TEntity entity)
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                var transaction = connection.BeginTransaction();
                try
                {
                    var result = await connection.DeleteAsync(entity, statement => statement.AttachToTransaction(transaction));
                    transaction.Commit();
                    return result;
                }
                catch (Exception)
                {
                    transaction.Rollback();
                    throw;
                }
            }
        }

        public bool Exists(TEntity entity)
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                var result = connection.Get(entity);

                return result != null;
            }
        }

        public async Task<bool> ExistsAsync(TEntity entity)
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                var result = await connection.GetAsync(entity);

                return result != null;
            }
        }

        public IEnumerable<TEntity> FindAll()
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                return connection.Find<TEntity>();
            }
        }

        public async Task<IEnumerable<TEntity>> FindAllAsync()
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                return await connection.FindAsync<TEntity>();
            }
        }

        public TEntity FindOne(TEntity id)
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                return connection.Get(id);
            }
        }

        public async Task<TEntity> FindOneAsync(TEntity id)
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                return await connection.GetAsync(id);
            }
        }

        public void Insert(TEntity entity)
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                var transaction = connection.BeginTransaction();
                try
                {
                    connection.Insert(entity, statement => statement.AttachToTransaction(transaction));
                    transaction.Commit();
                }
                catch (Exception)
                {
                    transaction.Rollback();
                    throw;
                }
            }
        }

        public async Task InsertAsync(TEntity entity)
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                var transaction = connection.BeginTransaction();
                try
                {
                    await connection.InsertAsync(entity, statement => statement.AttachToTransaction(transaction));
                    transaction.Commit();
                }
                catch (Exception)
                {
                    transaction.Rollback();
                    throw;
                }
            }
        }

        public bool Update(TEntity entity)
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                var transaction = connection.BeginTransaction();
                try
                {
                    var result = connection.Update(entity, statement => statement.AttachToTransaction(transaction));
                    transaction.Commit();
                    return result;
                }
                catch (Exception)
                {
                    transaction.Rollback();
                    throw;
                }
            }
        }

        public async Task<bool> UpdateAsync(TEntity entity)
        {
            using (var connection = connectionFactory.CreateConnectionOpened())
            {
                var transaction = connection.BeginTransaction();
                try
                {
                    var result = await connection.UpdateAsync(entity, statement => statement.AttachToTransaction(transaction));
                    transaction.Commit();
                    return result;
                }
                catch (Exception)
                {
                    transaction.Rollback();
                    throw;
                }
            }
        }
    }
}
