import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/homePage.component'),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

export default routes;
