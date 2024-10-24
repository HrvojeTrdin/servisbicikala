using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Klijent, KlijentDto>();
            CreateMap<KlijentDto, Klijent>();
            CreateMap<KlijentInsertDto, Klijent>();
            CreateMap<KlijentUpdateDto, Klijent>();
            CreateMap<Servis, ServisDto>();
            CreateMap<ServisInsertDto, Servis>();
            CreateMap<ServisUpdateDto, Servis>();
        }
    }
}
