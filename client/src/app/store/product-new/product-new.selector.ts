import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductNewState } from "./product-new.action";

export namespace MyOrderSelector {
  export const state = createFeatureSelector<ProductNewState>("productNew");

  export const getProductNew = createSelector(state, (state) => {
    return state;
  });
}
