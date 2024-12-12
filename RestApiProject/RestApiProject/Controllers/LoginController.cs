using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestApiProject.Data;
using RestApiProject.Models;
using System.Threading.Tasks;

namespace RestApiProject.Controllers
{
    [Route("api/Login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LoginController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/Login
        [HttpPost]
        [HttpPost]
        public async Task<string> Login([FromBody] LoginRequest loginRequest)
        {
            var user = await _context.Registers
                .FirstOrDefaultAsync(u => u.Username == loginRequest.Username && u.Password == loginRequest.Password);

            if (user == null)
            {
                return "Invalid username or password.";
            }

            return "Login successful!";
        }

    }
}
