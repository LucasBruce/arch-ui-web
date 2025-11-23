import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { IRepository } from '../../../../middleware/repository/repository.interface';
import { RepositoryToken } from '../../../../middleware/repository/repository.token';
import { UserToken } from '../../../../core/user/user.token';
import { UserInterface } from '../../../../core/user/user.interface';

@Component({
  selector: 'arch-user-app',
  imports: [],
  template: `
    <h2>IndexedDB no Angular 🚀</h2>
    <button (click)="salvar()">Salvar Usuário</button>
    <button (click)="listar()">Listar Usuários</button>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAppPage implements OnInit {
  private userService: UserInterface = inject(UserToken);
  private repository: IRepository = inject(RepositoryToken);

  async ngOnInit() {
    console.log('App Iniciado', this.userService.getUser());
  }

  async salvar() {
    await this.repository.put(this.userService.getUser()[0]);
    console.log('Usuário salvo!');
  }

  async listar() {
    const users = await this.repository.getAll();
    console.log('Usuários => ', users);
  }
}
