import { createReducer, on } from "@ngrx/store";
import { FavoriteActions, initialStateFavorite } from "./favorite.action";

export const FavoriteReducer = createReducer(
  initialStateFavorite,

  on(FavoriteActions.upFavorite, (state, favorite) => ({
    ...state,
    favoriteNumber: favorite.favorite.length,
    favoriteList: favorite.favorite,
  }))
);
