// src/app/models/pokemon.model.ts
import { Ipokemon } from '../interface/Pokemon.interface';

export class Pokemon implements Ipokemon {
  name!: string;
  height!: number;
  weight!: number;

  static fromJson(json: Ipokemon): Pokemon {
    return Object.assign(new Pokemon(), json);
  }
}
