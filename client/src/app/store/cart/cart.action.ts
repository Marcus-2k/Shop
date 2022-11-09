import { createAction, props } from "@ngrx/store";
import { ShoppingCart } from "../../shared/interface/interfaces";

export namespace ShoppingCartActions {
  export const getShoppingCart = createAction("GET_SHOPPING_CART_FROM_SERVER");

  export const upShoppingCart = createAction(
    "upShoppingCart",
    props<ShoppingCart>()
  );

  export const addShoppingCart = createAction(
    "addShoppingCart",
    props<{ id: string }>()
  );
  export const addShoppingCartFromServer = createAction(
    "addShoppingCartFromServer",
    props<ShoppingCart>()
  );

  export const removeShoppingCart = createAction(
    "removeShoppingCart",
    props<{ id: string }>()
  );
  export const removeShoppingCartFromServer = createAction(
    "removeShoppingCartFromServer",
    props<ShoppingCart>()
  );
}

export interface shoppingCartUserState {
  shoppingCartNumber: number;
  shoppingCartList: string[];
}

export const initialStateShoppingCart: shoppingCartUserState = {
  shoppingCartNumber: 0,
  shoppingCartList: [],
};
