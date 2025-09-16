import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/homePage.component'),
  },
  {
    path: 'client',
    loadComponent: () => import('./client/clientPage.component'),
  },
  {
    path: 'project',
    loadChildren: () => import('./projects/projects.routes'),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

export default routes;
