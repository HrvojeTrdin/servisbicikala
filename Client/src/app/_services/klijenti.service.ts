import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KlijentiService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  dohvatiSve(){
    return this.http.get<any>(this.baseUrl + 'klijent');
  }

  dohvatiPoId(id: any){
    return this.http.get<any>(this.baseUrl + 'klijent/' + id);
  }

  spremiNovog(model: any){
    return this.http.post(this.baseUrl + 'klijent', model);
  }

  obrisi(id: number){
    return this.http.delete(this.baseUrl + 'klijent/'+id);
  }

  azuriraj(model: any){
    console.log(model);
    return this.http.put(this.baseUrl + 'klijent/'+ model.id, model);
  }
}
