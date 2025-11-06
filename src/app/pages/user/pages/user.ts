import { CommonModule, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { UserInterface } from '../../../core/user/user.interface';
import { IDuty, IUsers } from '../../../core/user/user.service';
import { UserToken } from '../../../core/user/user.token';

@Component({
  selector: 'arch-app-user',
  imports: [NgIf, NgFor, JsonPipe, CommonModule],
  // providers: [provideUserFeature()],
  template: `
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
  `,
})
export class UserPage implements OnInit {
  errorMessage = '';
  isDisplay = true;
  users!: IDuty[];

  private userService: UserInterface = inject(UserToken);

  // constructor(@Inject(UserToken) private userService: UserInterface) {}

  ngOnInit(): void {
    // this.users$ = this.userService.getUsers();

    const next = (data: IUsers[]) => {
      this.users = [];

      for (const user of data) {
        this.users = [...this.users, ...user.duties];
      }
    };

    const errorFn = (msg: string) => {
      this.errorMessage = msg;
      console.log('Error Message => ', this.errorMessage);
    };

    this.userService.getUsers(next, errorFn);
  }
}
