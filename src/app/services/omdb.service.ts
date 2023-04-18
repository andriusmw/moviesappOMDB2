import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  url = "http://www.omdbapi.com/?i=tt3896198&apikey=a0fde4ce"

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `${this.url}${query}`;
    return this.http.get(url);
  }
}
