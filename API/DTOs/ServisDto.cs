using API.Entities;

namespace API.DTOs
{
    public class ServisDto
    {
        public int Id { get; set; }
        public required string VrstaServisa { get; set; }
        public required decimal RadniSati { get; set; }
        public required decimal Cijena { get; set; }

        public required Klijent Klijent { get; set; }
    }
}
