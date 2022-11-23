using lab8.Database;
using lab8.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace lab8.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReaderController : ControllerBase
    {
        private readonly DbConnection _db;

        public ReaderController(DbConnection db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<List<Reader>> GetReaders()
        {
            return await _db.Readers.OrderBy(p => p.Surname).ToListAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<Reader> GetReader(int id)
        {
            return await _db.Readers.FirstAsync(p => p.ID == id);
        }

        [HttpPut]
        public async Task<JsonResult> EditReader(Reader reader)
        {
            _db.Readers.Update(reader);
            await _db.SaveChangesAsync();
            return new JsonResult("Reader was updated successfully");
        }

         [HttpPost]
         public async Task<JsonResult> AddReader(Reader reader)
         {
             await _db.Readers.AddAsync(reader);
             await _db.SaveChangesAsync();
             return new JsonResult("Reader was added successfully");
         }

        [HttpDelete("{id:int}")]
        public async Task<JsonResult> DeleteReader(int id)
        {
            _db.Readers.Remove(await _db.Readers.FirstAsync(p => p.ID == id));
            await _db.SaveChangesAsync();
            return new JsonResult("Reader was deleted successfully");
        }
       
    }
}
