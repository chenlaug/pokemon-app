import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTE_TYPE } from '../../interface/routeType.interface';
import { SecondaryNavbar } from '../secondary-navbar/secondary-navbar';

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [RouterLink, SecondaryNavbar],
  templateUrl: './main-navbar.html',
  styleUrl: './main-navbar.css',
})
export class MainNavbar {
  routerlink: ROUTE_TYPE[] = [
    { id: 1, name: 'Home', path: 'home' },
    { id: 2, name: 'About Me', path: 'about' },
  ];
}
