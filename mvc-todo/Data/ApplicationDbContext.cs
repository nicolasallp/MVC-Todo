using Microsoft.EntityFrameworkCore;
using mvc_todo.Models;

namespace mvc_todo.Data
{
	public class ApplicationDbContext : DbContext
	{
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            
        }

        public DbSet<Todo> Todos { get; set; }
    }
}
