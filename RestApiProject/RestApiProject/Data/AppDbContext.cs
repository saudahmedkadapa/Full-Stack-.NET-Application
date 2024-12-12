using Microsoft.EntityFrameworkCore;
using RestApiProject.Models;
using YourNamespace.Models;

namespace RestApiProject.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Register> Registers { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Slot> Slots { get; set; }
    }
}
