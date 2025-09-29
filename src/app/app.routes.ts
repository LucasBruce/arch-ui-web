import { Routes } from '@angular/router';
import { PATHS } from './shared/constants/paths';

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
    data: {
      //  dados passados aqui podem ser recuperados via ActivatedRoute
    },
    canDeactivate: [], // e acionado antes de sair de uma rota, evita perda de dados
    canActivate: [], // e acionado antes de entrar em uma rota
    resolve: [], // usado para pré-carregar dados antes de ativar a rota
  },
];

//  CanActivateChild	Antes de acessar rotas filhas	Proteção hierárquica;
