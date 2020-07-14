import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl: string;
  model = 'pokemon';
  limit = 30;
  offset = 0;
  next: any;
  previous: any;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getUrl() {
    return `${this.apiUrl}${this.model}`;
  }


  getPokemonSpecies(id: string): Observable<any> {
    const url = `${this.apiUrl}pokemon-species/${id}/`;
    return this.http.get<any>(url);
  }

  getPokemonEvolutionary(id: string): Observable<any> {
    const url = `${this.apiUrl}evolution-chain/${id}/`;
    return this.http.get<any>(url);
  }

  fetchPokemonDamage(id: string) {
    const url = `${this.apiUrl}type/${id}/`;
    return this.http.get(url);
  }


  fetchPokemons(pokemonUrl?: string): Observable<any> {

    // return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=35&offset=0')
    //   .toPromise().then((res) => { console.log(res) });

    let url = `${this.apiUrl}pokemon/?limit=${this.limit}&offset=${this.offset}`;


    return this.http.get<any>(pokemonUrl ? pokemonUrl : url)
      .pipe(
        map((data: any) => {
          console.log(data);
          this.next = data.next;
          this.previous = data.previous;
          return data.results;
        })
      )
      .pipe(
        catchError(this.handleError)
      );
  }

  fetchPokemonDetails(url: string): Observable<any> {
    //let url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error ocurred', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}
