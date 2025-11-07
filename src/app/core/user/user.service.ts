import { inject, Injectable } from '@angular/core';
import { URLS } from '../../shared/constants/urls';
import { ApiInterface } from '../../middleware/api/api.interface';
import { ApiToken } from '../../middleware/api/api.token';
import { UserInterface } from './user.interface';

export type IUsers = {
  id: string;
  name: string;
  job: string;
  duties: IDuty[];
};

export type IDuty = {
  id: string;
  title: string;
  description: string;
  owner: {
    id: string;
    name: string;
    corporateEmail: string;
    job: string;
  };
};

@Injectable()
export class UserService implements UserInterface {
  private users!: IUsers[];
  private apiService: ApiInterface = inject(ApiToken);

  getUsers(next: (users: IUsers[]) => void, errorFn: (msg: string) => void): void {
    this.apiService
      .post<IUsers[]>({ path: URLS.USERS })
      .then((response) => {
        next(response);
      })
      .catch((error) => {
        console.error('Deu Ruim => ', error);
        errorFn('Erro ao carregar usuários via Promise.');
      });
  }

  setUser(users: IUsers[]) {
    this.users = users;
  }

  getUser() {
    return this.users;
  }
}
