import { createFeatureSelector, createSelector } from "@ngrx/store";
import { favoriteUserState } from "./favorite.action";

export namespace FavoriteSelector {
  export const state = createFeatureSelector<favoriteUserState>("favoriteUser");

  export const favoriteUser = createSelector(state, (state) => {
    return state;
  });
  export const favoriteNumber = createSelector(state, (state) => {
    return state.favoriteNumber;
  });
  export const favoriteList = createSelector(state, (state) => {
    return state.favoriteList;
  });
}
