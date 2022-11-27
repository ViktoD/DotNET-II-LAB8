using lab8.Database;
using lab8.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace lab8.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly DbConnection _db;

        public TicketController(DbConnection db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<List<Ticket>> GetTickets()
        {
            return await _db.Tickets.Include(p => p.Reader).ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<Ticket> GetTicket(int id)
        {
            return await _db.Tickets.FirstAsync(p => p.ID == id);
        }

        [HttpPost]
        public async Task<JsonResult> AddTicket(Ticket ticket)
        {
            Reader? reader = await _db.Readers.FindAsync(ticket.ReaderID);
            if (reader != null)
            {
                ticket.Reader = reader;
                await _db.Tickets.AddAsync(ticket);
                await _db.SaveChangesAsync();
                return new JsonResult("Ticket was added successfully");
            }
            else
            {
                return new JsonResult("Error while adding new ticket");
            }
            
        }

        [HttpDelete("{id:int}")]
        public async Task<JsonResult> DeleteTicket(int id)
        {
            _db.Tickets.Remove(await _db.Tickets.FirstAsync(p => p.ID == id));
            await _db.SaveChangesAsync();
            return new JsonResult("Ticket was deleted successfully");
        }
    }
}
