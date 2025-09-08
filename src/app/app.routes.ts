import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login/loginPage.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/layout/mainLayout.component'),
    loadChildren: () => import('./dahsboard/dashboard.routes'),
  },
  {
    path: 'auth/login',
    component: LoginPageComponent,
  },
];
