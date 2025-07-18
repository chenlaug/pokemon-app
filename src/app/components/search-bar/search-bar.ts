import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon';
import { PokemonSearch } from '../pokemon-search/pokemon-search';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule, PokemonSearch],
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css'], //
})
export class SearchBar {
  constructor(private pokemonService: PokemonService) {}

  data: any = null;
  searchTerm: string = '';
  result: string = '';
  isError: boolean = false;

  getPokemonByName(name: string) {
    name = name.trim().toLowerCase();
    if (name.length === 0) {
      this.data = null;
      this.result = 'Please enter a Pokémon name.';
      this.isError = true;
      return;
    }

    this.pokemonService.getPokemonByName(name).then(
      (pokemon) => {
        this.data = pokemon;
        this.result = `Found Pokémon: ${pokemon?.name}`;
        this.isError = false;
        console.log('Received Pokémon:', pokemon);
      },
      (error) => {
        this.data = null;
        this.result = `No Pokémon found with the name "${name}".`;
        this.isError = true;
        console.error('Error fetching Pokémon:', error);
      }
    );
  }
}
