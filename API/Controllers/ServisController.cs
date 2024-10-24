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
    public class ServisController(DataContext context, IMapper mapper) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ServisDto>>> GetServise()
        {
            try
            {
                var servisi = await context.Servisi.Include(s => s.Klijent).ToListAsync();
                if (servisi == null) return NotFound();

                var servisiToReturn = mapper.Map<IEnumerable<ServisDto>>(servisi);
                return Ok(servisiToReturn);
            }catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                                                ex.Message);
            }
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ServisDto>> GetServis(int id)
        {
            try
            {
                var servis = await context.Servisi.Include(s => s.Klijent).FirstOrDefaultAsync(s => s.Id == id);
                if(servis == null) return NotFound();

                return mapper.Map<ServisDto>(servis);
            }catch (Exception ex) {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                                   ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Servis>> Insert(ServisInsertDto servisInsertDto)
        {
            try
            {
                var servis = mapper.Map<Servis>(servisInsertDto);

                if(servisInsertDto.KlijentId != 0)
                {
                    var klijent = await context.Klijenti.FindAsync(servisInsertDto.KlijentId);
                    if(klijent == null) return NotFound("Klijent nije pronađen");
                    servis.Klijent = klijent;
                }

                context.Servisi.Add(servis);
                await context.SaveChangesAsync();

                return Ok(servis);
            }catch (Exception ex) {
                return StatusCode(StatusCodes.Status503ServiceUnavailable,
                            ex.Message);
            }
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteServis(int id)
        {
            try
            {
                var servis = await context.Servisi.FindAsync(id);
                if (servis != null)
                {
                    context.Servisi.Remove(servis);
                    context.SaveChanges();
                }
                else
                {
                    return NotFound();
                }

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> UpdateServis(int id, ServisUpdateDto servisUpdateDto)
        {
            try
            {
                var servis = await context.Servisi.Include(s => s.Klijent).FirstOrDefaultAsync(s => s.Id == id);
                if (servis == null) return NotFound();

                mapper.Map(servisUpdateDto, servis);

                if(servisUpdateDto.KlijentId != 0)
                {
                    servis.Klijent = await context.Klijenti.FindAsync(servisUpdateDto.KlijentId);
                    if(servis.Klijent == null)
                    {
                        return NotFound("Klijent nije pronađen");
                    }
                }

                context.Servisi.Update(servis);

                await context.SaveChangesAsync();

                return StatusCode(StatusCodes.Status200OK);
            }
            catch (Exception ex) {
                return StatusCode(StatusCodes.Status503ServiceUnavailable, ex.Message);
            }
        }
    }
}
