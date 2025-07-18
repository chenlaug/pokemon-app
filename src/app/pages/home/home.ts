import { Component } from '@angular/core';
import { MainNavbar } from '../../components/main-navbar/main-navbar';
import { PokemonSearch } from '../../components/pokemon-search/pokemon-search';
import { SearchBar } from '../../components/search-bar/search-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainNavbar, SearchBar, PokemonSearch],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
