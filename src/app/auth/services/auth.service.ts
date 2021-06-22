import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface credentials {
  username: string;
  password: string;
  passwordConfirmation?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'https://api.angular-email.com/auth';
  signedIn$: any = new BehaviorSubject(null);
  constructor(private _http: HttpClient) {}
  userNameAvailable(username: string): Observable<{ available: boolean }> {
    return this._http.post<{ available: boolean }>(
      `${this.endpoint}/username`,
      {
        username,
      }
    );
  }
  signUp(credentials: credentials): Observable<{ username: string }> {
    return this._http
      .post<{ username: string }>(`${this.endpoint}/signup`, credentials)
      .pipe(tap(() => this.signedIn$.next(true)));
  }
  checkAuth() {
    return this._http
      .get<{ authenticated: boolean; username: string }>(
        `${this.endpoint}/signedin`
      )
      .pipe(
        tap(({ authenticated }) => {
          this.signedIn$.next(authenticated);
        })
      );
  }
  signOut() {
    return this._http.post<any>(`${this.endpoint}/signout`, {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }
  signIn(credentials: credentials) {
    return this._http.post(`${this.endpoint}/signin`, credentials).pipe(
      tap(() => {
        this.signedIn$.next(true);
      })
    );
  }
}
