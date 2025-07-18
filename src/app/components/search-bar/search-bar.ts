import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css'], //
})
export class SearchBar {
  data: any;
  searchTerm: string = '';
  constructor(private pokemonService: PokemonService) {}

  getPokemonByName(name: string) {
    if (!name) {
      console.warn('No Pokémon name provided');
      return;
    }

    name = name.trim().toLowerCase();
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
