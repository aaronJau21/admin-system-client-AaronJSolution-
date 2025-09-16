import { Routes } from '@angular/router';

const projectRoutes: Routes = [
  {
    path: 'type-project',
    loadComponent: () => import('./pages/typeProjectPage/typeProjectPage.component'),
  },
  {
    path: 'list-projects',
    loadComponent: () => import('./pages/listProjects/listProjects.component'),
  },
  {
    path: '**',
    redirectTo: 'type-project',
    pathMatch: 'full',
  },
];

export default projectRoutes;
