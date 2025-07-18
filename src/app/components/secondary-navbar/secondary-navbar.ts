import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTE_TYPE } from '../../interface/routeType.interface';

@Component({
  selector: 'app-secondary-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './secondary-navbar.html',
  styleUrl: './secondary-navbar.css',
})
export class SecondaryNavbar {
  routerlink: ROUTE_TYPE[] = [
    { id: 1, path: '/pokemon', name: 'Pokemon' },
    { id: 2, path: '/move', name: 'Move' },
    { id: 3, path: '/localisation', name: 'Localisation' },
  ];
}
