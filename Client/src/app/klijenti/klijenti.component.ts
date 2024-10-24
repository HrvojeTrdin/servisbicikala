import { Component, OnInit } from '@angular/core';
import { Klijent } from '../_modeli/klijent';
import { ToastrService } from 'ngx-toastr';
import { KlijentiService } from '../_services/klijenti.service';

@Component({
  selector: 'app-klijenti',
  templateUrl: './klijenti.component.html',
  styleUrls: ['./klijenti.component.css']
})
export class KlijentiComponent implements OnInit{

  klijenti: Klijent[] = [];

  constructor(private klijentiService: KlijentiService, private toastrService: ToastrService
  ){}

  ngOnInit(): void {
    this.dohvatiKlijente();
 //   this.dohvatiDjelatnike();
  }

  dohvatiKlijente(){
    this.klijenti = [];
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


  obrisi(id: number){
    this.klijentiService.obrisi(id).subscribe({
      next: success => {
        this.toastrService.success("Klijent obrisan");
        this.dohvatiKlijente();
      },
      error: error => {
        console.error(error);
        this.toastrService.error("Dogodila se greška");
      }
    })
  }

 
}
