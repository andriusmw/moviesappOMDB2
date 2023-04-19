import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  busqueda!: string;
  resultados: any;

  constructor(private serviceOmdb: OmdbService, private route: Router) { }

  ngOnInit(): void {
  }

  // --------------------Functions-------------------
  buscar() {
    this.serviceOmdb.getQuery(`&s=${this.busqueda}`)
      .subscribe((response: any) => { // Cambia el tipo de dato de 'response' a 'any'
        this.resultados = response.Search;
        console.log(this.resultados)
      });
  }

  detalle(id: string) {
    this.route.navigate(['detail', id]);
  }

}
