import { UserFeatureComponent } from './user.feature';
import { PATHS } from '../../shared/constants/paths';
import { Routes } from '@angular/router';

export const userRoutes = (): Routes => [
  {
    path: PATHS.PAGES.USER,
    component: UserFeatureComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/user/user').then((p) => p.UserPage),
      },
      {
        path: 'user-app',
        loadComponent: () => import('./pages/user-app/user-app').then((p) => p.UserAppPage),
      },
    ],
  },
];
