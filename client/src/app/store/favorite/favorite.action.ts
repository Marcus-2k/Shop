import { createAction, props } from "@ngrx/store";
import { Favorite } from "../../shared/interface/interfaces";

export namespace FavoriteActions {
  export const getFavorite = createAction("GET_FAVORITE");

  export const getFavoriteSuccess = createAction(
    "GET_FAVORITE_SUCCESS",
    props<Favorite>()
  );

  export const upFavorite = createAction("upFavorite", props<Favorite>());

  export const addFavorite = createAction(
    "addFavorite",
    props<{ id: string }>()
  );
  export const addFavoriteFromServer = createAction(
    "addFavoriteFromServer",
    props<Favorite>()
  );

  export const removeFavorite = createAction(
    "removeFavorite",
    props<{ id: string }>()
  );
  export const removeFavoriteFromServer = createAction(
    "removeFavoriteFromServer",
    props<Favorite>()
  );
}

export interface favoriteUserState {
  favoriteNumber: number;
  favoriteList: string[];
}

export const initialStateFavorite: favoriteUserState = {
  favoriteNumber: 0,
  favoriteList: [],
};
