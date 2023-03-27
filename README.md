# Candidate Tracker

A site to manage and keep track of potential candidates. This application was written with C#, React, React Context and
Entity Framework.

# Installation & Setup

* Click 'Code' and then 'Download ZIP'
* Make sure to have [SQL Express](https://www.microsoft.com/en-us/download/details.aspx?id=55994) installed
* Modify the connection string in the [appsettings.json](https://github.com/YochevedWaj/CandidateTracker/blob/master/CandidateTracker.Web/appsettings.json) to reflect your database environment
* Add migrations to the data project `dotnet ef migrations add initial`
* Update your database `dotnet ef database update`
