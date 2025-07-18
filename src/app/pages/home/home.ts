import { Component } from '@angular/core';
import { MainNavbar } from '../../components/main-navbar/main-navbar';
import { SearchBar } from '../../components/search-bar/search-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainNavbar, SearchBar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
