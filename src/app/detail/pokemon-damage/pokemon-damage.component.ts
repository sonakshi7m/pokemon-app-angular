import { Component, OnInit, Input } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-damage',
  templateUrl: './pokemon-damage.component.html',
  styleUrls: ['./pokemon-damage.component.scss'],
})
export class PokemonDamageComponent implements OnInit {
  @Input() details;
  @Input() damage;
  types;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.types = forkJoin(
      this.details.types.map((value) => {
        const url = value.type.url;
        const matched = /\/([0-9]+)\/$/.exec(url);
        return matched ? this.pokemonService.fetchPokemonDamage(matched[1]) : of(null);
      })
    );
  }

  randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
