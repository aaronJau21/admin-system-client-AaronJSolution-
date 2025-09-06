import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ILoginRequest, ILoginResponse } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly _api = environment.api_url;

  public login(data: ILoginRequest): Observable<ILoginResponse> {
    const url = `${this._api}/auth/login`;

    return this.http.post<ILoginResponse>(url, data);
  }
}
