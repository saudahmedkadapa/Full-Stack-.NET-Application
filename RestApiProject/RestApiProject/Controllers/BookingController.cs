using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using YourNamespace.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RestApiProject.Data;

namespace YourNamespace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BookingsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/bookings
        [HttpGet]
        public Task<List<Booking>> GetBookings()
        {
            return _context.Bookings.ToListAsync();
        }


        // POST: api/bookings
        
        [HttpPost]
        public Task<Booking> PostBooking(Booking booking)
        {
            _context.Bookings.Add(booking);
            return _context.SaveChangesAsync().ContinueWith(task =>
            {
                return booking;
            });
        }
    }
}
