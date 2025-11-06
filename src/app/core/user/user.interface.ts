import { IUsers } from './user.service';

export interface UserInterface {
  getUsers(next: (users: IUsers[]) => void, errorFn: (msg: string) => void): void;
}
