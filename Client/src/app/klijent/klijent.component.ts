import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { KlijentiService } from '../_services/klijenti.service';

@Component({
  selector: 'app-klijent',
  templateUrl: './klijent.component.html',
  styleUrls: ['./klijent.component.css']
})
export class KlijentComponent implements OnInit {

  klijentID: string = '';
  klijent: any = {
    id: '',
    ime: '',
    prezime: '',
    telefon: ''
  }

  constructor(private route: ActivatedRoute, private klijentiService: KlijentiService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.klijentID = params['id'];
      this.dohvatiKlijentaPoId();
    });
  }

  dohvatiKlijentaPoId(){
    this.klijentiService.dohvatiPoId(this.klijentID).subscribe({
      next: response => {
        console.log(response);
        console.log(response.ime);
        


        this.klijent = {
          id: response.id,
          ime: response.ime,
          prezime: response.prezime,
          telefon: response.telefon
        }
        console.log(this.klijent);
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

  uredi(){
    this.klijent.id = this.klijentID;

    this.klijentiService.azuriraj(this.klijent).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Spremljeni podaci klijenta.");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }


}
