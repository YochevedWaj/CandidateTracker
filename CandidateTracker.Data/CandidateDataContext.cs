using Microsoft.EntityFrameworkCore;

namespace CandidateTracker.Data
{
    public class CandidateDataContext : DbContext
    {
        private string _connectionString;
        public CandidateDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }
        public DbSet<Candidate> Candidates { get; set; }
    }
}
