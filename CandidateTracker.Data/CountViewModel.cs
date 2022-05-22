using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTracker.Data
{
    public class CountViewModel
    {
        public int PendingCount { get; set; }
        public int ConfirmedCount { get; set; }
        public int RefusedCount { get; set; }
    }
}
