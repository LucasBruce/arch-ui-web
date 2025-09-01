import { ROUTE_TREE } from '../../shared/constants/route-tree';
import type { Routes } from '@angular/router';

export const matrixRainRoutes = (): Routes => [
  {
    path: ROUTE_TREE.PAGES.MATRIX_RAIN,
    loadComponent: () => import('./matrix-rain').then((m) => m.MatrixRain),
  },
];
