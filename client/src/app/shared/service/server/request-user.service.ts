import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  Favorite,
  Product,
  ShoppingCart,
  ProductCard_ShoppingCart,
  User_Account,
  Wish,
} from "src/app/shared/interface/interfaces";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class RequestUserService {
  constructor(private http: HttpClient) {}

  url_server: string = environment.URL_SERVER_API + "account/user/";

  getUserInfo(): Observable<User_Account> {
    return this.http.get<User_Account>(`${this.url_server}`, {
      withCredentials: true,
    });
  }
  upUserInfo(user: FormData): Observable<{ message: string }> {
    return this.http.patch<{ message: string }>(`${this.url_server}`, user, {
      withCredentials: true,
    });
  }
  editPassword(
    newPassword: string,
    oldPassword: string
  ): Observable<{ message: boolean }> {
    return this.http.patch<{ message: boolean }>(
      `${this.url_server}password/`,
      { newPassword, oldPassword },
      { withCredentials: true }
    );
  }
  // History =============================================================
  getAuthUserHistoryView(): Observable<{ history__view: Product[] }> {
    return this.http.get<{ history__view: Product[] }>(
      `${this.url_server}history/`,
      { withCredentials: true }
    );
  }
  newHistoryView(id: string): Observable<any> {
    return this.http.patch<any>(
      `${this.url_server}history/`,
      { id },
      { withCredentials: true }
    );
  }
  // History =============================================================
  // Universal START =================================================================================================
  getFavoriteAndShoppingCart(): Observable<Favorite & ShoppingCart> {
    return this.http.get<Favorite & ShoppingCart>(
      `${this.url_server}favorite_and_shoppingCart/`,
      {
        withCredentials: true,
      }
    );
  }
  // Universal END ===================================================================================================
  // Favorite ============================================================
  getFavorite(): Observable<Favorite> {
    return this.http.get<Favorite>(`${this.url_server}favorite/`, {
      withCredentials: true,
    });
  }
  addFavorite(id: string): Observable<Favorite> {
    return this.http.post<Favorite>(
      `${this.url_server}favorite/`,
      { id },
      { withCredentials: true }
    );
  }
  removeFavorite(id: string): Observable<Favorite> {
    return this.http.delete<Favorite>(`${this.url_server}favorite/${id}`, {
      withCredentials: true,
    });
  }
  getWishList(): Observable<Wish[]> {
    return this.http.get<Wish[]>(`${this.url_server}wish_list/`, {
      withCredentials: true,
    });
  }
  deleteWishList(listId: string[]): Observable<Wish[]> {
    return this.http.patch<Wish[]>(`${this.url_server}wish_list/`, listId, {
      withCredentials: true,
    });
  }
  // Favorite ============================================================
  // Shopping Cart =======================================================
  getShoppingCart(): Observable<ShoppingCart> {
    return this.http.get<ShoppingCart>(`${this.url_server}cart/`, {
      withCredentials: true,
    });
  }
  addShoppingCart(id: string): Observable<ShoppingCart> {
    return this.http.post<ShoppingCart>(
      `${this.url_server}cart/`,
      { id },
      { withCredentials: true }
    );
  }
  removeShoppingCart(id: string): Observable<ShoppingCart> {
    return this.http.delete<ShoppingCart>(`${this.url_server}cart/${id}`, {
      withCredentials: true,
    });
  }
  getShoppingCartList(): Observable<ProductCard_ShoppingCart[]> {
    return this.http.get<ProductCard_ShoppingCart[]>(
      `${this.url_server}shopping_cart/`,
      { withCredentials: true }
    );
  }
  // Shopping Cart =======================================================
}
