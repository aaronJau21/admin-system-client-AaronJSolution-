import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { IClient, ICreateClientRequest, IGetClientAll } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private readonly http = inject(HttpClient);
  private readonly api = environment.api_url;

  public getAllClients(page: string, limit?: string): Observable<IGetClientAll> {
    const url = `${this.api}/clients?page=${page}&limit=${limit}`;
    return this.http.get<IGetClientAll>(url);
  }

  public createClient(data: ICreateClientRequest): Observable<IClient> {
    const url = `${this.api}/clients`;
    return this.http.post<IClient>(url, {
      ...data,
    });
  }

  public updateStateClient(id: string, state: string): Observable<IClient> {
    const url = `${this.api}/clients/state/${id}`;
    return this.http.patch<IClient>(url, { state });
  }
}
