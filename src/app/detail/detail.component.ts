import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from '../data.service';
import { PokemonService } from '../services/pokemon/pokemon.service';
import { TypesColors, TypesDamage } from '../constants';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public pokemonData;
  selectedPokemon: any;
  pokemonDetails: any;
  id: any;
  species: Observable<any>;
  evolutionary: Observable<any>;
  types: any;
  damage: any;
  pokemonUrl: string;

  constructor(dataService: DataService, private router: Router, private route: ActivatedRoute, private pokemonService: PokemonService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pokemonData = dataService.getOption();

    // this.selectedPokemon = this.pokemonData.pokemonDetails.find((pokemon) => {
    //   return pokemon.id == this.id;
    // })
    // this.selectedPokemon.types.map((poke) => {
    //   poke.type.color = TypesColors[poke.type.name];
    // })

    // this.types = this.selectedPokemon.types.map(ele => ele.type.name);
    // this.damage = [];

    // this.types.map(ele => {
    //   this.damage.push(...TypesDamage[ele]);
    // });

    // console.log(this.types)
    // console.log(this.damage)

  }

  ngOnInit(): void {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
    this.pokemonService.fetchPokemonDetails(pokemonUrl).subscribe((resp) => {
      this.selectedPokemon = resp;
      this.selectedPokemon.types.map((poke) => {
        poke.type.color = TypesColors[poke.type.name];
      })

      this.types = this.selectedPokemon.types.map(ele => ele.type.name);
      this.damage = [];

      this.types.map(ele => {
        this.damage.push(...TypesDamage[ele]);
      });
    })

    this.pokemonService.getPokemonSpecies(this.id).subscribe((data) => {
      this.species = data

      this.species['genderRatio'] = { women: (this.species['gender_rate'] * 10) + '%', men: (100 - this.species['gender_rate'] * 10) + '%' }
    });

    this.evolutionary = this.pokemonService.getPokemonEvolutionary(this.id).pipe(
      switchMap((evolution) => {
        const url = evolution.chain.evolves_to[0].species.url;
        let id = url.split('/');
        id = [id.length - 2]
        const newUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
        return this.pokemonService.fetchPokemonDetails(newUrl);
      })
    )

  }

}
