import { createFeatureSelector, createSelector } from "@ngrx/store";
import { shoppingCartUserState } from "./cart.action";

export namespace ShoppingCartSelector {
  export const state =
    createFeatureSelector<shoppingCartUserState>("shoppingCartUser");

  export const shoppingCartUser = createSelector(state, (state) => {
    return state;
  });
  export const shoppingCartNumber = createSelector(state, (state) => {
    return state.shoppingCartNumber;
  });
  export const shoppingCartList = createSelector(state, (state) => {
    return state.shoppingCartList;
  });
}
