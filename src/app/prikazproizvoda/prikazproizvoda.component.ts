import { Component } from '@angular/core';
import { ProizvodService } from '../services/proizvod.service';
import { MatTableDataSource } from '@angular/material/table';
import { Proizvod } from '../model/proizvod';

@Component({
  selector: 'app-prikazproizvoda',
  templateUrl: './prikazproizvoda.component.html',
  styleUrl: './prikazproizvoda.component.css'
})
export class PrikazproizvodaComponent {

  constructor(private servis:ProizvodService) { }

  ngOnInit(): void {
    this.servis.ucitajProizvode().subscribe((podatak=>{
      console.log(podatak);
      this.dataSource.data = podatak;
    }))
  }

  dataSource = new MatTableDataSource<Proizvod>();
  displayedColumns: string[] = ['id', 'naziv', 'boja', 'cena','kategorija','datumKreiranja','slika','brisanje'];

  filter(event: any) {
    if (!event.target.value)
   return;
    this.dataSource.filter = event.target.value.trim().toLowerCase()
    }

    obrisiProizvod(id:number){
      if(confirm("Da li ste sigurni da zelite da obrisete proizvod?"))
      {
        this.servis.obrisiProizvod(id);
      }
      else
      {
        console.log("Niste obrisali proizvod");
      }
    }

}
