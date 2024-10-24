import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { KlijentiService } from '../_services/klijenti.service';

@Component({
  selector: 'app-klijent-create',
  templateUrl: './klijent-create.component.html',
  styleUrls: ['./klijent-create.component.css']
})
export class KlijentCreateComponent {

  klijent = {
    id: '',
    ime: '',
    prezime: '',
    telefon: ''
  }

  constructor(private klijentiService: KlijentiService, private toastr: ToastrService){}

  ngOnInit(): void {
    
  }



  spremi(){

    this.klijentiService.spremiNovog(this.klijent).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Klijent spremljen");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

}
