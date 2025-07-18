import { Component } from '@angular/core';
import { MainNavbar } from '../../components/main-navbar/main-navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainNavbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
