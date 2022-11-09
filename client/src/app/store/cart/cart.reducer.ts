import { createReducer, on } from "@ngrx/store";
import { ShoppingCartActions, initialStateShoppingCart } from "./cart.action";

export const ShoppingCartReducer = createReducer(
  initialStateShoppingCart,

  on(ShoppingCartActions.upShoppingCart, (state, shoppingCart) => ({
    ...state,
    shoppingCartNumber: shoppingCart.shoppingCart.length,
    shoppingCartList: shoppingCart.shoppingCart,
  }))
);
