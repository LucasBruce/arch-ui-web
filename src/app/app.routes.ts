import { PATHS } from './shared/constants/paths';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: PATHS.PAGES.HELLOW,
    loadComponent: () => import('./pages/hellow/hellow').then((m) => m.HellowPage),
  },
  {
    path: PATHS.PAGES.MATRIX_RAIN,
    loadComponent: () => import('./pages/matrix-rain/matrix-rain').then((m) => m.MatrixRainPage),
  },
  {
    path: PATHS.PAGES.USER,
    loadComponent: () => import('./pages/user/user').then((m) => m.UserPage),
  },
];
