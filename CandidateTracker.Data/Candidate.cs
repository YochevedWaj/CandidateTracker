﻿using System;

namespace CandidateTracker.Data
{
    public class Candidate
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Number { get; set; }
        public string Notes { get; set; }
        public RegistrationStatus RegistrationStatus { get; set; }
    }

}
