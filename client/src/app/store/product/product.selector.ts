import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserProductState } from "./product.action";

export namespace UserProductSelector {
  export const state = createFeatureSelector<UserProductState>("user_product");

  export const getUserProduct = createSelector(state, (state) => state);
}
