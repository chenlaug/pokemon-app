import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css'], //
})
export class SearchBar {
  data: any;

  constructor(private pokemonService: PokemonService) {}

  getPokemonByName(name: string) {
    this.pokemonService.getPokemonByName(name).then(
      (pokemon) => {
        this.data = pokemon;
        console.log('Received Pokémon:', pokemon);
      },
      (error) => {
        console.error('Error fetching Pokémon:', error);
      }
    );
  }
}
