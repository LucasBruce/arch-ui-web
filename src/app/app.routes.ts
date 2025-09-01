import { Routes } from '@angular/router';
import { pageRoutes } from './pages/page/page-route';
import { matrixRainRoutes } from './pages/matrix-rain/matrix-rain-route';

export const routes: Routes = [...pageRoutes(), ...matrixRainRoutes()];
