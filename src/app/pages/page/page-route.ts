import { ROUTE_TREE } from '../../shared/constants/route-tree';
import type { Routes } from '@angular/router';

export const pageRoutes = (): Routes => [
  {
    path: 'avi',
    loadComponent: () => import('./page').then((m) => m.Page),
  },
];
