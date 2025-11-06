import { Routes } from '@angular/router';
import { PATHS } from '../../shared/constants/paths';
import { UserFeatureComponent } from './user.feature';

export const userRoutes = (): Routes => [
  {
    path: PATHS.PAGES.USER,
    component: UserFeatureComponent,
    children: [
      {
        path: PATHS.PAGES.USER,
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '',
        loadComponent: () => import('./pages/user').then((m) => m.UserPage),
      },
    ],
  },
];
