import { IUsers } from '../../core/user/user.service';

export interface IRepository {
  put(user: IUsers): Promise<void>;
  get(id: number): Promise<IUsers | undefined>;
  getAll(): Promise<IUsers[]>;
  delete(id: number): Promise<void>;
  clear(storeName: 'usuarios' | 'cacheApi'): Promise<void>;
  putCache(key: string, data: any): Promise<void>;
  getCache(key: string): Promise<IUsers | IUsers[] | undefined>;
}
