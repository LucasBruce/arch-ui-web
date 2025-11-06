import { InjectionToken } from '@angular/core';
import { UserInterface } from './user.interface';

export const UserToken = new InjectionToken<UserInterface>('UserService');
