import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServisiService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  dohvatiSve(){
    return this.http.get<any>(this.baseUrl + 'servis');
  }
  
  dohvatiPoId(id: any){
    return this.http.get<any>(this.baseUrl + 'servis/' + id);
  }

  spremiNovog(model: any){
    return this.http.post(this.baseUrl + 'servis', model);
  }

  obrisi(id: number){
    return this.http.delete(this.baseUrl + 'servis/'+id);
  }

  azuriraj(model: any){
    return this.http.put(this.baseUrl + 'servis/'+ model.id, model);
  }
}
