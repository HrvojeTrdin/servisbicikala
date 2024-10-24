namespace API.DTOs
{
    public class ServisUpdateDto
    {
        public required string VrstaServisa { get; set; }
        public required decimal RadniSati { get; set; }
        public required decimal Cijena { get; set; }
        public required int KlijentId { get; set; } // FK
    }
}
