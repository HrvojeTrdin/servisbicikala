namespace API.Entities
{
    public class Servis
    {
        public int Id { get; set; }
        public required string VrstaServisa { get; set; }
        public required decimal RadniSati { get; set; }
        public required decimal Cijena { get; set; }

        public required Klijent Klijent { get; set; }
    }
}
