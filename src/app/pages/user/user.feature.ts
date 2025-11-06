import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../../core/api/api.service';
import { ApiToken } from '../../core/api/api.token';
import { UserService } from '../../core/user/user.service';
import { UserToken } from '../../core/user/user.token';

@Component({
  standalone: true,
  selector: 'arch-app-user-root',
  imports: [RouterOutlet],
  providers: [
    { provide: ApiToken, useClass: ApiService },
    { provide: UserToken, useClass: UserService },
  ],
  template: `<router-outlet></router-outlet>`,
})
export class UserFeatureComponent {}
