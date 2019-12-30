using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backoffice.Infra.Repositories
{
    public interface IBaseRepository<TEntity> where TEntity : class
    {
        IEnumerable<TEntity> FindAll();

        Task<IEnumerable<TEntity>> FindAllAsync();

        Task<TEntity> FindOneAsync(TEntity id);

        TEntity FindOne(TEntity id);

        void Insert(TEntity entity);

        Task InsertAsync(TEntity entity);

        bool Update(TEntity entity);

        Task<bool> UpdateAsync(TEntity entity);

        bool Delete(TEntity entity);

        Task<bool> DeleteAsync(TEntity entity);

        Task<bool> ExistsAsync(TEntity entity);

        bool Exists(TEntity entity);
    }
}
