using API.Data;
using API.DTOs;
using API.Entities;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KlijentController(DataContext context, IMapper mapper) : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<IEnumerable<KlijentDto>>> GetKlijente()
        {
            try
            {
                var klijenti = await context.Klijenti.ToListAsync();
                if (klijenti == null) return NotFound();

                var klijentiToReturn = mapper.Map<IEnumerable<KlijentDto>>(klijenti);
                return Ok(klijentiToReturn);

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                              ex.Message);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<KlijentDto>> GetKlijent(int id)
        {
            try
            {
                var klijent = await context.Klijenti.FirstOrDefaultAsync(k => k.Id == id);
                if (klijent == null) return NotFound();

                return mapper.Map<KlijentDto>(klijent);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                               ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Klijent>> Insert(KlijentInsertDto klijentInsertDto)
        {
            try
            {
                var klijent = mapper.Map<Klijent>(klijentInsertDto);
                context.Klijenti.Add(klijent);
                await context.SaveChangesAsync();

                return Ok(klijent);

            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                    ex.Message);
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteKlijent(int id)
        {
            try
            {
                var klijent = await context.Klijenti.FindAsync(id);
                if(klijent == null) return NotFound();

                context.Klijenti.Remove(klijent);
                context.SaveChanges();

                return Ok();
            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> UpdateKlijent(int id, KlijentUpdateDto klijentUpdateDto)
        {
            try
            {
                var klijent = await context.Klijenti.FirstOrDefaultAsync(k => k.Id == id);
                if (klijent == null) return NotFound();

                mapper.Map(klijentUpdateDto, klijent);
                context.Klijenti.Update(klijent);

                await context.SaveChangesAsync();

                return StatusCode(StatusCodes.Status200OK);
            }
            catch  (Exception ex) {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }
    }
}
