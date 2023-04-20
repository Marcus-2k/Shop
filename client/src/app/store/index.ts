import { ActionReducerMap, MetaReducer } from "@ngrx/store";

import { environment } from "../../environments/environment";
import { favoriteUserState } from "./favorite/favorite.action";
import { shoppingCartUserState } from "./cart/cart.action";
import { OrderState } from "./orders/order.action";
import { MyOrderUserState } from "./my-orders/my-order.action";
import { ProductNewState } from "./product-new/product-new.action";

import { FavoriteReducer } from "./favorite/favorite.reducer";
import { ShoppingCartReducer } from "./cart/cart.reducer";
import { OrderReducer } from "./orders/order.reducer";
import { MyOrderReducer } from "./my-orders/my-order.reducer";
import { ProductNewReducer } from "./product-new/product-new.reducer";

export interface State {
  favoriteUser: favoriteUserState;
  shoppingCartUser: shoppingCartUserState;
  ordersUser: OrderState;
  myOrderUser: MyOrderUserState;
  productNew: ProductNewState;
}

export const reducers: ActionReducerMap<State> = {
  favoriteUser: FavoriteReducer,
  shoppingCartUser: ShoppingCartReducer,
  ordersUser: OrderReducer,
  myOrderUser: MyOrderReducer,
  productNew: ProductNewReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
