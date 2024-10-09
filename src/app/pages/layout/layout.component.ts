import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  nav = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      icon: 'dashboard'
    },
    {
      name: 'Property Type',
      link: '/property-type',
      icon: 'home'
    },
    {
      name: 'Site',
      link: '/site',
      icon: 'location_city'
    },
    {
      name: 'Booking',
      link: '/booking',
      icon: 'book'
    }
  ];

}
