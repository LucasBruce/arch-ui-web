import { InjectionToken } from '@angular/core';
import { ApiInterface } from './api.interface';

export const ApiToken = new InjectionToken<ApiInterface>('ApiService');
