import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from '../../../../core/user/user.interface';
import { IDuty, IUsers } from '../../../../core/user/user.service';
import { UserToken } from '../../../../core/user/user.token';
import { RepositoryToken } from '../../../../middleware/repository/repository.token';
import { IRepository } from '../../../../middleware/repository/repository.interface';

@Component({
  selector: 'arch-app-user',
  imports: [JsonPipe, CommonModule],
  template: `
    <h3 style="text-align: center;">Usuários com Promise</h3>
    <button (click)="redirecionar()">Pagina App</button>
    <button (click)="listar()">Listar Usuários</button>
    <ul>
      @for (user of users; track user) {
        <li>
          <span
            style="background: #a7d4cbe7; padding: 10px; border-radius: 5px; display: block; margin-bottom: 10px;"
          >
            <pre>{{ user | json }}</pre>
          </span>
        </li>
      }
    </ul>
  `,
})
export class UserPage implements OnInit {
  errorMessage = '';
  isDisplay = true;
  users!: IDuty[];

  private readonly router = inject(Router);
  private repository: IRepository = inject(RepositoryToken);
  private readonly userService: UserInterface = inject(UserToken);

  // constructor(@Inject(UserToken) private userService: UserInterface) {}

  ngOnInit(): void {
    // this.users$ = this.userService.getUsers();

    const next = (data: IUsers[]) => {
      this.users = [];

      for (const user of data) {
        this.users = [...this.users, ...user.duties];
      }

      this.userService.setUser(data);
    };

    const errorFn = (msg: string) => {
      this.errorMessage = msg;
      console.log('Error Message => ', this.errorMessage);
    };

    this.userService.getUsers(next, errorFn);
  }

  redirecionar() {
    this.router.navigate(['user/user-app']).catch((error: Error) => {
      console.error(error);
    });
  }

  async listar() {
    const users = await this.repository.getAll();
    console.log('Usuários => ', users);
  }
}
