import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  Favorite,
  Product,
  ShoppingCart,
  ShoppingCartList,
  User,
  Wish,
} from "src/app/shared/interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class RequestUserService {
  constructor(private http: HttpClient) {}

  private HOST: string = "185.235.218.108";
  private PORT: string = ":5000";
  private url_server: string = `http://${this.HOST}${this.PORT}/api/account`;

  getUserInfo(): Observable<User> {
    return this.http.get<User>(`${this.url_server}/user/`, {
      withCredentials: true,
    });
  }
  userUpInfo(newUser: FormData): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(
      `${this.url_server}/user/`,
      newUser,
      { withCredentials: true }
    );
  }
  editPassword(
    newPassword: string,
    oldPassword: string
  ): Observable<{ message: boolean }> {
    return this.http.patch<{ message: boolean }>(
      `${this.url_server}/user/password/`,
      { newPassword, oldPassword },
      { withCredentials: true }
    );
  }
  // History =============================================================
  getAuthUserHistoryView(): Observable<{ history__view: Product[] }> {
    return this.http.get<{ history__view: Product[] }>(
      `${this.url_server}/user/history/`,
      { withCredentials: true }
    );
  }
  newHistoryView(id: string): Observable<any> {
    return this.http.patch<any>(
      `${this.url_server}/user/history/`,
      { id },
      { withCredentials: true }
    );
  }
  // History =============================================================
  // Favorite ============================================================
  getFavorite(): Observable<Favorite> {
    return this.http.get<Favorite>(`${this.url_server}/user/favorite/`, {
      withCredentials: true,
    });
  }
  addFavorite(id: string): Observable<Favorite> {
    return this.http.post<Favorite>(
      `${this.url_server}/user/favorite/`,
      { id },
      { withCredentials: true }
    );
  }
  removeFavorite(id: string): Observable<Favorite> {
    return this.http.delete<Favorite>(
      `${this.url_server}/user/favorite/${id}`,
      { withCredentials: true }
    );
  }
  getWishList(): Observable<Wish[]> {
    return this.http.get<Wish[]>(`${this.url_server}/user/wish_list/`, {
      withCredentials: true,
    });
  }
  deleteWishList(listId: string[]): Observable<Wish[]> {
    return this.http.patch<Wish[]>(
      `${this.url_server}/user/wish_list/`,
      listId,
      { withCredentials: true }
    );
  }
  // Favorite ============================================================
  // Shopping Cart =======================================================
  getShoppingCart(): Observable<ShoppingCart> {
    return this.http.get<ShoppingCart>(`${this.url_server}/user/cart/`, {
      withCredentials: true,
    });
  }
  addShoppingCart(id: string): Observable<ShoppingCart> {
    return this.http.post<ShoppingCart>(
      `${this.url_server}/user/cart/`,
      { id },
      { withCredentials: true }
    );
  }
  removeShoppingCart(id: string): Observable<ShoppingCart> {
    return this.http.delete<ShoppingCart>(
      `${this.url_server}/user/cart/${id}`,
      { withCredentials: true }
    );
  }
  getShoppingCartList(): Observable<ShoppingCartList[]> {
    return this.http.get<ShoppingCartList[]>(
      `${this.url_server}/user/shopping_cart/`,
      { withCredentials: true }
    );
  }
  // Shopping Cart =======================================================
}
