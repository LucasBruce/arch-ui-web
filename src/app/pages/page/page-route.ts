import { ROUTE_TREE } from '../../shared/constants/route-tree';
import type { Routes } from '@angular/router';

export const pageRoutes = (): Routes => [
  {
    path: ROUTE_TREE.PAGES.PAGE,
    loadComponent: () => import('./page').then((m) => m.Page),
  },
];
