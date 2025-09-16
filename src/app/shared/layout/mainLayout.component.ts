import { Component, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

interface IRoutes {
  name: string;
  icon: string;
  route?: string;
  children?: IRoutes[];
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
    MatExpansionModule,
  ],
  templateUrl: './mainLayout.component.html',
  styleUrl: './mainLayout.component.css',
})
export default class MainLayoutComponent {
  public readonly panelOpenState = signal(false);

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
    {
      name: 'Proyectos',
      icon: 'work',
      children: [
        {
          name: 'Tipos de Proyecto',
          icon: 'category',
          route: '/project/type-project',
        },
        {
          name: 'Proyectos',
          icon: 'folder',
          route: '/project/list-projects',
        },
      ],
    },
  ]);
}
