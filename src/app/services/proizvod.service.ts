import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proizvod } from '../model/proizvod';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  constructor(private http:HttpClient) { }

  url:string = "https://63b59b2f58084a7af39a1cf4.mockapi.io/vezbanje";

  ucitajProizvode(){
    return this.http.get<Proizvod[]>(this.url);
  }

  obrisiProizvod(id:number){
    return this.http.delete(this.url+'/'+id).subscribe(odgovor=>{
      console.log(odgovor);
    });
  }
   

}
