using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestApiProject.Data;
using RestApiProject.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using YourNamespace.Models;

namespace RestApiProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SlotController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SlotController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Slot
        [HttpGet]
        public async Task<List<Slot>> GetSlots()
        {
            return await _context.Slots.ToListAsync();
        }


        // GET: api/Slot/{id}
        
        [HttpGet("{id}")]
        public async Task<Slot?> GetSlot(long id)
        {
            return await _context.Slots.FindAsync(id);
        }


        // POST: api/Slot
        [HttpPost]
        public async Task<Slot> CreateSlot(Slot slot)
        {
            _context.Slots.Add(slot);
            await _context.SaveChangesAsync();

            return slot; // Return the created slot object
        }


        // PUT: api/Slot/{id}
        [HttpPut("{id}")]
        public async Task UpdateSlotAvailability(long id, [FromBody] bool isAvailable)
        {
            var slot = await _context.Slots.FindAsync(id);
            if (slot == null)
            {
                throw new Exception("Slot not found.");
            }

            slot.IsAvailable = isAvailable;
            await _context.SaveChangesAsync();
        }

        [HttpDelete("{id}")]
        public async Task DeleteSlot(long id)
        {
            var slot = await _context.Slots.FindAsync(id);
            if (slot == null)
            {
                throw new Exception("Slot not found.");
            }

            _context.Slots.Remove(slot);
            await _context.SaveChangesAsync();
        }

    }
}
