import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable, OnInit } from '@angular/core';
import { catchError, finalize, firstValueFrom, Observable, of } from 'rxjs';
import { URLS } from '../../shared/constants/urls';

type IUsers = {
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

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(URLS.USERS).pipe(
      catchError((error) => {
        console.error('Erro ao buscar usuários:', error);
        return of([]);
      }),
      finalize(() => console.log('Requisição de usuários finalizada')),
    );
  }
}

@Injectable({ providedIn: 'root' })
export class UserService1 {
  private http = inject(HttpClient);

  async getUsers(): Promise<IUsers[]> {
    try {
      const result = await firstValueFrom(this.http.get<IUsers[]>(URLS.USERS));
      return result;
    } catch (error) {
      console.error('Erro no serviço:', error);
      throw error; // repassa erro para o componente tratar
    }
  }
}

@Component({
  selector: 'arch-app-user',
  imports: [AsyncPipe, NgIf, NgFor, JsonPipe],
  template: `
    <div *ngIf="isDisplay; else pro">
      <div *ngIf="users$ | async as users; else loading">
        <div *ngIf="users.length > 0; else noUsers">
          <h3 style="text-align: center;">Usuários com Observable</h3>
          <ul>
            <li *ngFor="let user of users">
              <span
                style="background: #a7d4cbe7; padding: 10px; border-radius: 5px; display: block; margin-bottom: 10px;"
              >
                <pre>{{ user | json }}</pre>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ng-template #pro>
      <div #pro *ngIf="users; else loading">
        <div *ngIf="users.length > 0; else noUsers">
          <h3 style="text-align: center;">Usuários com Promise</h3>
          <ul>
            <li *ngFor="let user of users">
              <span
                style="background: #a7d4cbe7; padding: 10px; border-radius: 5px; display: block; margin-bottom: 10px;"
              >
                <pre>{{ user | json }}</pre>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </ng-template>

    <ng-template #loading>
      <p>Carregando usuários...</p>
    </ng-template>

    <ng-template #noUsers>
      <p>Nenhum usuário encontrado.</p>
    </ng-template>
  `,
})
export class UserPage implements OnInit {
  users$?: Observable<IUsers[]>;
  errorMessage = '';
  isDisplay = false;
  users!: IUsers[];

  // private userService = inject(UserService);

  private userService1 = inject(UserService1);

  ngOnInit(): void {
    // this.users$ = this.userService.getUsers();

    this.userService1
      .getUsers()
      .then((data) => {
        this.users = data;
      })
      .catch((error) => {
        this.errorMessage = 'Erro ao carregar usuários via Promise.';
        console.error(this.errorMessage, error);
      });
  }
}
