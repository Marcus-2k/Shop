import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GuestLocalStorageService {
  constructor() {
    console.log("Start constructor Guest-Local-Storage-Service");

    const carts_id: string[] | null = this.getShoppingCart();

    if (carts_id) {
      this.number_of_carts.next(carts_id);
    }
  }

  private separator = ",";
  number_of_carts: ReplaySubject<string[]> = new ReplaySubject(5);

  addShoppingCart(id: string) {
    const guest_shopping_cart: string | null = localStorage.getItem(
      "guest-shopping-cart"
    );

    if (guest_shopping_cart) {
      let shopping_cart_list: string[] = guest_shopping_cart.split(
        this.separator
      );
      shopping_cart_list.push(id);

      localStorage.setItem(
        "guest-shopping-cart",
        shopping_cart_list.join(this.separator)
      );

      this.number_of_carts.next(shopping_cart_list);
    } else {
      localStorage.setItem("guest-shopping-cart", id);

      this.number_of_carts.next([id]);
    }
  }
  removeShoppingCart(id: string) {
    const guest_shopping_cart: string | null = localStorage.getItem(
      "guest-shopping-cart"
    );

    if (guest_shopping_cart) {
      let shopping_cart_list: string[] = guest_shopping_cart.split(
        this.separator
      );

      const index = shopping_cart_list.indexOf(id);
      shopping_cart_list.splice(index, 1);
      localStorage.setItem(
        "guest-shopping-cart",
        shopping_cart_list.join(this.separator)
      );

      this.number_of_carts.next(shopping_cart_list);
    }
  }

  getShoppingCart(): string[] | null {
    const guest_shopping_cart: string | null = localStorage.getItem(
      "guest-shopping-cart"
    );

    if (guest_shopping_cart) {
      let shopping_cart_list: string[] = guest_shopping_cart.split(
        this.separator
      );
      return shopping_cart_list;
    } else {
      return null;
    }
  }
}
