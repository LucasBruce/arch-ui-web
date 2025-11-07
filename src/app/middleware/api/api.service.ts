import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  private readonly httpClient = inject(HttpClient);

  async post<S>(arg: { path: string }): Promise<S> {
    return await lastValueFrom(
      this.httpClient.get<S>(arg.path, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      }),
    );
  }
}
