import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserLogin, UserRegister } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private token: string | null = null;

  register(user: UserRegister): Observable<any> {
    return this.http.post<any>('http://localhost:5000/api/auth/register', user);
  }

  login(user: UserLogin): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>('http://localhost:5000/api/auth/login', user)
      .pipe(
        tap(({ token }) => {
          localStorage.setItem('auth-token', token);
          this.setToken(token);
        })
      );
  }
  setToken(token: string | null) {
    this.token = token;
  }

  getToken(): string | null | undefined {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken(null);
    localStorage.clear();
  }
}
