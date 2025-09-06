import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/pages/login/loginPage.component';
import { HomePageComponent } from './dahsboard/homePage/homePage.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/layout/mainLayout.component'),
  },
  {
    path: 'auth/login',
    component: LoginPageComponent,
  },
];
