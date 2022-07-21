import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userResponse } from '../interface/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RequestUserService {
  constructor(private http: HttpClient) {}

  UrlServer: string = 'http://localhost:5000/api';

  getInfoAccountUser(): Observable<userResponse> {
    return this.http.get<userResponse>(`${this.UrlServer}/account/user`);
  }

  userUpInfo(newUser: FormData, id: string): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(
      `${this.UrlServer}/account/user/${id}`,
      newUser
    );
  }
}
