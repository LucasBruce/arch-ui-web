import { Injectable } from '@angular/core';

import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { IUsers } from '../../core/user/user.service';
import { IRepository } from './repository.interface';

interface AppDB extends DBSchema {
  usuarios: {
    key: number;
    value: IUsers;
  };
  cacheApi: {
    key: string;
    value: IUsers[] | IUsers;
  };
}

@Injectable({
  providedIn: 'root',
})
export class Repository implements IRepository {
  private readonly dbPromise: Promise<IDBPDatabase<AppDB>>;

  constructor() {
    this.dbPromise = openDB<AppDB>('AppDatabase', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('usuarios')) {
          db.createObjectStore('usuarios', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('cacheApi')) {
          db.createObjectStore('cacheApi');
        }
      },
    });
  }

  // Métodos genéricos
  async put(user: IUsers) {
    const db = await this.dbPromise;
    await db.put('usuarios', user);
  }

  async get(id: number) {
    const db = await this.dbPromise;
    return await db.get('usuarios', id);
  }

  async getAll() {
    const db = await this.dbPromise;
    return await db.getAll('usuarios');
  }

  async delete(id: number) {
    const db = await this.dbPromise;
    await db.delete('usuarios', id);
  }

  async clear(storeName: 'usuarios' | 'cacheApi') {
    const db = await this.dbPromise;
    await db.clear(storeName);
  }

  // Exemplo de cache API
  async putCache(key: string, data: any) {
    const db = await this.dbPromise;
    await db.put('cacheApi', data, key);
  }

  async getCache(key: string) {
    const db = await this.dbPromise;
    return await db.get('cacheApi', key);
  }
}
