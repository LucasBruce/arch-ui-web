import { PATHS } from './shared/constants/paths';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: PATHS.PAGES.PAGE,
    loadComponent: () => import('./pages/page/page').then((m) => m.Page),
  },
  {
    path: PATHS.PAGES.MATRIX_RAIN,
    loadComponent: () => import('./pages/matrix-rain/matrix-rain').then((m) => m.MatrixRain),
  },
];
