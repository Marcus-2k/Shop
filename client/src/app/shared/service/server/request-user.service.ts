import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  Favorite,
  ShoppingCart,
  User,
  Wish,
} from "src/app/shared/interface/interfaces";

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
    return this.http.get<Favorite>(`${this.url_server}/user/favorite/`);
  }
  addFavorite(id: string): Observable<Favorite> {
    return this.http.post<Favorite>(`${this.url_server}/user/favorite/`, {
      id,
    });
  }
  removeFavorite(id: string): Observable<Favorite> {
    return this.http.delete<Favorite>(`${this.url_server}/user/favorite/${id}`);
  }
  getWishList(): Observable<Wish[]> {
    return this.http.get<Wish[]>(`${this.url_server}/user/wish_list/`);
  }
  deleteWishList(listId: string[]): Observable<Wish[]> {
    return this.http.patch<Wish[]>(
      `${this.url_server}/user/wish_list/`,
      listId
    );
  }
  // Favorite ============================================================
  // Shopping Cart =======================================================
  getShoppingCart(): Observable<ShoppingCart> {
    return this.http.get<ShoppingCart>(`${this.url_server}/user/cart/`);
  }
  addShoppingCart(id: string): Observable<ShoppingCart> {
    return this.http.post<ShoppingCart>(`${this.url_server}/user/cart/`, {
      id,
    });
  }
  removeShoppingCart(id: string): Observable<ShoppingCart> {
    return this.http.delete<ShoppingCart>(`${this.url_server}/user/cart/${id}`);
  }
  getShoppingCartList(): Observable<ShoppingCart[]> {
    return this.http.get<ShoppingCart[]>(
      `${this.url_server}/user/shopping_cart/`
    );
  }
  // Shopping Cart =======================================================
}
