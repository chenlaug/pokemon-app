// src/app/services/pokemon.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Ipokemon } from '../interface/Pokemon.interface';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  async getPokemonByName(name: string): Promise<Pokemon> {
    try {
      const json = await firstValueFrom(
        this.http.get<Ipokemon>(`${this.apiUrl}${name}`)
      );
      return Pokemon.fromJson(json);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      throw error;
    }
  }
}
