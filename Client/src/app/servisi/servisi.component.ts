import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Servis } from '../_modeli/servis';
import { ServisiService } from '../_services/servisi.service';

@Component({
  selector: 'app-servisi',
  templateUrl: './servisi.component.html',
  styleUrls: ['./servisi.component.css']
})
export class ServisiComponent implements OnInit{

  servisi: Servis[] = [];

  constructor(private servisiService: ServisiService, private toastr: ToastrService){}

  ngOnInit(): void {
    console.log("init");
    this.dohvatiServise();
  }

  dohvatiServise(){
    this.servisiService.dohvatiSve().subscribe({
      next: response => {
       
        let servisiData = response["$values"];
      
        console.log("Data");
        console.log(servisiData);
      
        servisiData.forEach((item: any) => {
          const servis: Servis = {
            id: item.id,
            vrstaServisa: item.vrstaServisa,
            radniSati: item.radniSati,
            cijena: item.cijena,
            klijent: item.klijent
          }

          this.servisi.push(servis);
          console.log("servisi", this.servisi);
        });
      },
      error: error => {
        console.error(error);
      }
    });
  }

  obrisi(servis: any){
    this.servisiService.obrisi(servis.id).subscribe({
      next: response => {
        console.log(response);
        const index = this.servisi.indexOf(servis);
        this.servisi.splice(index, 1);
        this.toastr.success("Servis obrisan");
      },
      error: error => {
        this.toastr.error("Dogodila se greška");
      }
    })
  }

}
