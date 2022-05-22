using CandidateTracker.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CandidateTracker.Web.Models;

namespace CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatesController : ControllerBase
    {
        private readonly string _connectionString;

        public CandidatesController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("AddCandidate")]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            candidate.RegistrationStatus = RegistrationStatus.Pending;
            repo.AddCandidate(candidate);
        }

        [HttpGet]
        [Route("Get")]
        public List<Candidate> GetCandidates(RegistrationStatus status)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidates(status);
        }

        [HttpGet]
        [Route("getbyid")]
        public Candidate GetByID(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetByID(id);
        }

        [HttpGet]
        [Route("getstatuscount")]
        public CountViewModel GetStatusCount()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetStatusCount();
        }

        [HttpPost]
        [Route("setstatus")]
        public void SetStatus(UpdateStatusViewModel vm)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.SetStatus(vm.Id, vm.Status);
        }
    }
}
