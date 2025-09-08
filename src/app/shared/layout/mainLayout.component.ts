import { Component, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

interface IRoutes {
  name: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-main-layout',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './mainLayout.component.html',
  styleUrl: './mainLayout.component.css',
})
export default class MainLayoutComponent {
  public routes = signal<IRoutes[]>([
    {
      name: 'Inicio',
      icon: 'home',
      route: '/home',
    },
    {
      name: 'Clientes',
      icon: 'people',
      route: '/client',
    },
  ]);
}
