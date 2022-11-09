import { ActionReducerMap, MetaReducer } from "@ngrx/store";

import { environment } from "../../environments/environment";
import { shoppingCartUserState } from "./cart/cart.action";
import { ShoppingCartReducer } from "./cart/cart.reducer";

import { favoriteUserState } from "./favorite/favorite.action";
import { FavoriteReducer } from "./favorite/favorite.reducer";

export interface State {
  favoriteUser: favoriteUserState;
  shoppingCartUser: shoppingCartUserState;
}

export const reducers: ActionReducerMap<State> = {
  favoriteUser: FavoriteReducer,
  shoppingCartUser: ShoppingCartReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
