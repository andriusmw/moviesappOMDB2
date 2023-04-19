import { Component, OnInit } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  busqueda!: string;

  constructor(private serviceOmdb: OmdbService) { }
  ngOnInit(): void {
  }

  buscar() {


    this.serviceOmdb.getQuery(`&s=${this.busqueda}`)
      .subscribe(response => {
        console.log(response);
      })
  }

}
