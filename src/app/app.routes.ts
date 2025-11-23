import { Routes } from '@angular/router';
import { PATHS } from './shared/constants/paths';
import { userRoutes } from './pages/user/user.routes';

export const routes: Routes = [
  {
    path: PATHS.PAGES.HELLO,
    loadComponent: () => import('./pages/hellow/hellow').then((m) => m.HellowPage),
  },
  {
    path: PATHS.PAGES.MATRIX_RAIN,
    loadComponent: () => import('./pages/matrix-rain/matrix-rain').then((m) => m.MatrixRainPage),
  },
  ...userRoutes(),
];

//  CanActivateChild	Antes de acessar rotas filhas	Proteção hierárquica;
