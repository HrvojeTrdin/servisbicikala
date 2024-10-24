import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Klijent } from '../_modeli/klijent';
import { ServisiService } from '../_services/servisi.service';
import { KlijentiService } from '../_services/klijenti.service';

@Component({
  selector: 'app-servis-update',
  templateUrl: './servis-update.component.html',
  styleUrls: ['./servis-update.component.css']
})
export class ServisUpdateComponent implements OnInit{

  servis: any = {
    id: 0,
    vrstaServisa: '',
    radniSati: '',
    cijena: '',
    klijentId: ''
  }

  klijenti: Klijent[] = [];


  servisID: string = "";

  constructor(
    private route: ActivatedRoute, 
    private servisiService: ServisiService,
    private klijentiService: KlijentiService,
     private toastr: ToastrService,
    ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.servisID = params['id'];
      this.dohvatiServisPoId();
      this.dohvatiKlijente();
    });
  }

  dohvatiServisPoId(){
    this.servisiService.dohvatiPoId(this.servisID).subscribe({
      next: response => {
        console.log("Response", response);

        this.servis = {
          id: response.id,
          vrstaServisa: response.vrstaServisa,
          radniSati: response.radniSati,
          cijena: response.cijena,
          klijentId: response.klijent.id
        }

        console.log("Servis data", this.servis);
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    }
    )
  }

  spremi(){
    console.log(this.servis);
    // const updateModel = {...this.korisnik};

    this.servisiService.azuriraj(this.servis).subscribe({
      next: response => {
        console.log(response);
        this.toastr.success("Spremljeni podaci servisa.");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška.");
      }
    })
  }

  dohvatiKlijente(){
    this.klijentiService.dohvatiSve().subscribe({
      next: success => {
        console.log(success);
        const klijentiData = success["$values"];

        klijentiData.forEach((klijentItem: any) => {
          const klijent: Klijent = {
            id: klijentItem.id,
            ime: klijentItem.ime,
            prezime: klijentItem.prezime,
            telefon: klijentItem.telefon
          }

          this.klijenti.push(klijent);
          console.log("klijenti", this.klijenti);
        });
      },
      error: error => {
        console.error(error);
      }
    })
  }

}
