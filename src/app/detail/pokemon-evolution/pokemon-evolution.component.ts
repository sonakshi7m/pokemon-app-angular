import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-evolution',
  templateUrl: './pokemon-evolution.component.html',
  styleUrls: ['./pokemon-evolution.component.css']
})
export class PokemonEvolutionComponent implements OnInit {
  @Input() evolutionary;
  @Input() details;
  constructor() { }

  ngOnInit(): void {
  }

}
