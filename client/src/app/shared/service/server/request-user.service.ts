import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Favorite, User } from "src/app/shared/interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestUserService {
  constructor(private http: HttpClient) {}

  private HOST: string = "localhost";
  private PORT: string = ":5000";
  private url_server: string = `http://${this.HOST}${this.PORT}/api/account`;

  getUserInfo(): Observable<User> {
    return this.http.get<User>(`${this.url_server}/user/`);
  }

  userUpInfo(newUser: FormData): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(
      `${this.url_server}/user/`,
      newUser
    );
  }

  // Favorite ============================================================
  getFavorite(): Observable<Favorite> {
    return this.http.get<Favorite>(`${this.url_server}/user/get/favorite`);
  }

  addFavorite(id: string): Observable<Favorite> {
    return this.http.post<Favorite>(`${this.url_server}/user/add/favorite`, {
      id,
    });
  }

  removeFavorite(id: string): Observable<Favorite> {
    return this.http.post<Favorite>(`${this.url_server}/user/remove/favorite`, {
      id,
    });
  }
  // Favorite ============================================================
}
