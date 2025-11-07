import { PATHS } from '../../shared/constants/paths';
import { UserPage } from './pages/user/user';
import { Routes } from '@angular/router';

export const userRoutes = (): Routes => [
  {
    path: PATHS.PAGES.USER,
    loadComponent: () => import('./user.feature').then((p) => p.UserFeatureComponent),
    children: [
      {
        path: PATHS.PAGES.USER,
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '',
        component: UserPage,
      },
      {
        path: 'user-app',
        loadComponent: () => import('./pages/user-app/user-app').then((p) => p.UserApp),
      },
    ],
  },
];
