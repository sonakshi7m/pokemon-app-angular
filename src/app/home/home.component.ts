import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';


import { PokemonService } from '../services/pokemon/pokemon.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemons: Observable<any>;
  pokemonDetails: any[] = [];
  previous = this.pokemonService.previous;
  next = this.pokemonService.next;
  newUrl = '';

  constructor(private pokemonService: PokemonService, public dataService: DataService) { }

  ngOnInit(): void {
    this.fetchPokemons();
  }

  onNext(next) {
    this.fetchPokemons(next);
  }

  onPrevious(previous) {
    this.fetchPokemons(previous);
  }

  fetchPokemons(pokemonUrl: string = null) {
    this.pokemonService.fetchPokemons(pokemonUrl)
      .subscribe((data) => {
        this.previous = this.pokemonService.previous;
        this.next = this.pokemonService.next;
        this.pokemons = data;

        this.pokemons.forEach((pokemon) => {

          this.pokemonService.fetchPokemonDetails(pokemon.url).subscribe((resp) => {

            this.pokemonDetails.push(resp)

          });
        })
        this.dataService.setOption('pokemonDetails', this.pokemonDetails);
      });
  }

}
