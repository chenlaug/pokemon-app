import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  imports: [],
  templateUrl: './pokemon-search.html',
  styleUrl: './pokemon-search.css',
})
export class PokemonSearch {
  @Input() pokemonName: string = '';
  @Input() pokemonSpriteUrl: string = '';
}
