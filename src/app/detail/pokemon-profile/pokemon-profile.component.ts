import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.css']
})
export class PokemonProfileComponent implements OnInit {
  @Input() details;
  @Input() species;
  constructor() { }

  ngOnInit(): void {
  }

}
