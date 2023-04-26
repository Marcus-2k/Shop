import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GuestLocalStorageService {
  constructor() {}

  private separator = ",";

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
    } else {
      localStorage.setItem("guest-shopping-cart", id);
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
