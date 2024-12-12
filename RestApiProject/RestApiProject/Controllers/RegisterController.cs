using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestApiProject.Data; 
using RestApiProject.Models;
using System.Linq;
using System.Threading.Tasks;

namespace RestApiProject.Controllers
{
    [Route("api/Register")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RegisterController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Register
        [HttpGet]
        public async Task<List<Register>> GetRegisters()
        {
            return await _context.Registers.ToListAsync();
        }


        // GET: api/Register/{id}
        [HttpGet("{id}")]
        public async Task<Register?> GetRegister(int id)
        {
            return await _context.Registers.FindAsync(id);
        }


        // POST: api/Register
        [HttpPost]
        [HttpPost]
        public async Task<Register> CreateRegister(Register register)
        {
            _context.Registers.Add(register);
            await _context.SaveChangesAsync();

            return register;
        }


        // PUT: api/Register/{id}
        [HttpPut("{id}")]
        public async Task UpdateRegister(int id, Register updatedRegister)
        {
            var register = await _context.Registers.FindAsync(id);
            if (register == null)
            {
                throw new Exception("Register not found.");
            }

            register.Name = updatedRegister.Name;
            register.Email = updatedRegister.Email;
            register.Username = updatedRegister.Username;
            register.Password = updatedRegister.Password;
            register.VehicleNumber = updatedRegister.VehicleNumber;

            await _context.SaveChangesAsync();
        }


        // DELETE: api/Register/{id}
        [HttpDelete("{id}")]
        public async Task DeleteRegister(int id)
        {
            var register = await _context.Registers.FindAsync(id);
            if (register == null)
            {
                throw new Exception("Register not found.");
            }

            _context.Registers.Remove(register);
            await _context.SaveChangesAsync();
        }

    }
}
