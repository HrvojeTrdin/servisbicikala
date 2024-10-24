import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Klijent } from '../_modeli/klijent';
import { ServisiService } from '../_services/servisi.service';
import { KlijentiService } from '../_services/klijenti.service';

@Component({
  selector: 'app-servis-create',
  templateUrl: './servis-create.component.html',
  styleUrls: ['./servis-create.component.css']
})
export class ServisCreateComponent {

  servis: any = {
    id: 0,
    vrstaServisa: '',
    radniSati: '',
    cijena: 0,
    klijentId: ''
  }

  klijenti: Klijent[] = [];

  constructor(
    private servisiService: ServisiService,
    private klijentiService: KlijentiService,
    private toastr: ToastrService,
  ){}

  ngOnInit(){
    this.dohvatiKlijente();
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

  spremi(){
    console.log("Servis za spremiti", this.servis);

    this.servisiService.spremiNovog(this.servis).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Servis spremljen");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

}
