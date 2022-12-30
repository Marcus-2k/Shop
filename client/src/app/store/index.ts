import { ActionReducerMap, MetaReducer } from "@ngrx/store";

import { environment } from "../../environments/environment";
import { favoriteUserState } from "./favorite/favorite.action";
import { shoppingCartUserState } from "./cart/cart.action";
import { OrderState } from "./orders/order.action";

import { FavoriteReducer } from "./favorite/favorite.reducer";
import { ShoppingCartReducer } from "./cart/cart.reducer";
import { OrderReducer } from "./orders/order.reducer";
import { MyOrderReducer } from "./my-orders/my-order.reducer";
import { MyOrderUserState } from "./my-orders/my-order.action";

export interface State {
  favoriteUser: favoriteUserState;
  shoppingCartUser: shoppingCartUserState;
  ordersUser: OrderState;
  myOrderUser: MyOrderUserState;
}

export const reducers: ActionReducerMap<State> = {
  favoriteUser: FavoriteReducer,
  shoppingCartUser: ShoppingCartReducer,
  ordersUser: OrderReducer,
  myOrderUser: MyOrderReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
