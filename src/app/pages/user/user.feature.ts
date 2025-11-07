import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../../middleware/api/api.service';
import { ApiToken } from '../../middleware/api/api.token';
import { UserService } from '../../core/user/user.service';
import { UserToken } from '../../core/user/user.token';
import { RepositoryToken } from '../../middleware/repository/repository.token';
import { Repository } from '../../middleware/repository/repository.service';

@Component({
  standalone: true,
  selector: 'arch-app-user-root',
  imports: [RouterOutlet],
  providers: [
    { provide: ApiToken, useClass: ApiService },
    { provide: UserToken, useClass: UserService },
    { provide: RepositoryToken, useClass: Repository },
  ],
  template: `<router-outlet></router-outlet>`,
})
export class UserFeatureComponent {}
