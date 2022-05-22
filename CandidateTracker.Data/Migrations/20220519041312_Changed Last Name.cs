using Microsoft.EntityFrameworkCore.Migrations;

namespace CandidateTracker.Data.Migrations
{
    public partial class ChangedLastName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LarstName",
                table: "Candidates",
                newName: "LastName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Candidates",
                newName: "LarstName");
        }
    }
}
