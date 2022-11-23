using lab8.Database;
using lab8.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace lab8.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InfoBookController : ControllerBase
    {
        private readonly DbConnection _db;

        public InfoBookController(DbConnection db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<List<InfoBook>> GetInfoBooks()
        {
            return await _db.InfoBooks.Include(p => p.Ticket).Include(p => p.Book).Include(p => p.Ticket.Reader).OrderBy(p => p.Ticket.Reader.Surname).ToListAsync();
        }

        [HttpPost]
        public async Task<JsonResult> AddInfoBook(InfoBook infoBook)
        {
            Book? book = await _db.Books.FindAsync(infoBook.BookID);
            Ticket? ticket = await _db.Tickets.FindAsync(infoBook.TicketID);
            Reader? reader = await _db.Readers.FindAsync(infoBook.Ticket.ReaderID);

            if (book != null && ticket != null && reader != null)
            {
                infoBook.Book = book;
                infoBook.Ticket = ticket;
                infoBook.Ticket.Reader = reader;
                await _db.InfoBooks.AddAsync(infoBook);
                await _db.SaveChangesAsync();
                return new JsonResult("Information about book was added successfully");
            }
            else
            {
                return new JsonResult("Error while adding new information about book");
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<JsonResult> DeleteInfoBook(int id)
        {
            _db.InfoBooks.Remove(await _db.InfoBooks.FirstAsync(p => p.ID == id));
            await _db.SaveChangesAsync();
            return new JsonResult("Information about book was deleted successfully");
        }
    }
}
