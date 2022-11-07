import { ActionReducerMap, MetaReducer } from "@ngrx/store";

import { environment } from "../../environments/environment";

import { favoriteUserState } from "./favorite/favorite.action";
import { FavoriteReducer } from "./favorite/favorite.reducer";

export interface State {
  favoriteUser: favoriteUserState;
}

export const reducers: ActionReducerMap<State> = {
  favoriteUser: FavoriteReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
