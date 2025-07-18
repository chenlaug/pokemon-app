import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SecondaryNavbar } from "../secondary-navbar/secondary-navbar";

@Component({
  selector: 'app-main-navbar',
  imports: [RouterLink, SecondaryNavbar],
  templateUrl: './main-navbar.html',
  styleUrl: './main-navbar.css'
})
export class MainNavbar {

routerlink = [
  {id:1, name: 'Home', path: 'home',},
  {id:2, name: 'About Me', path: 'about'}
  ]
}