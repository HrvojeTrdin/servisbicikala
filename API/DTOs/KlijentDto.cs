namespace API.DTOs
{
    public class KlijentDto
    {
        public int Id { get; set; }
        public required string Ime { get; set; }
        public required string Prezime { get; set; }
        public required string Telefon { get; set; }
    }
}
