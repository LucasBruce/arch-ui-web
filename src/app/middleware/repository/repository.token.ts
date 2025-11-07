import { InjectionToken } from '@angular/core';
import { IRepository } from './repository.interface';

export const RepositoryToken = new InjectionToken<IRepository>('Repository');
