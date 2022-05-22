using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;

namespace CandidateTracker.Data
{
    public class CandidateRepository
    {
        private string _connectionString;
        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate candidate)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Candidates.Add(candidate);
            context.SaveChanges();
        }

        public List<Candidate> GetCandidates(RegistrationStatus status)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == status).ToList();
        }

        public Candidate GetByID(int id)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.ID == id);
        }

        public CountViewModel GetStatusCount()
        {
            using var context = new CandidateDataContext(_connectionString);
            return new CountViewModel
            {
                PendingCount = context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Pending).Count(),
                ConfirmedCount = context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).Count(),
                RefusedCount = context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Refused).Count()

            };
          
        }

        public void SetStatus(int id, RegistrationStatus status)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"UPDATE Candidates SET RegistrationStatus = {status} WHERE ID = {id}");
        }
    }

}
