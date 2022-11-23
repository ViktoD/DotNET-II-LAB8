using lab8.Database;
using lab8.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace lab8.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly DbConnection _db;

        public BookController(DbConnection db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<List<Book>> GetBooks()
        {
            return await _db.Books.OrderBy(p => p.Name).ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<Book> GetBook(int id)
        {
            return await _db.Books.FirstAsync(p => p.ID == id);
        }

        [HttpPost]
        public async Task<JsonResult> AddBook(Book book)
        {
            await _db.Books.AddAsync(book);
            await _db.SaveChangesAsync();
            return new JsonResult("Book was added successfully");
        }

        [HttpPut]
        public async Task<JsonResult> EditBook(Book book)
        {
            _db.Books.Update(book);
            await _db.SaveChangesAsync();
            return new JsonResult("Book was updated successfully");
        }

        [HttpDelete("{id:int}")]
        public async Task<JsonResult> DeleteBook(int id)
        {
            _db.Books.Remove(await _db.Books.FirstAsync(p => p.ID == id));
            await _db.SaveChangesAsync();
            return new JsonResult("Book was deleted successfully");
        }
    }
}
