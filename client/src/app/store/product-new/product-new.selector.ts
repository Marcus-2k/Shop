import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductNewState } from "./product-new.action";

export namespace ProductNewSelector {
  export const state = createFeatureSelector<ProductNewState>("productNew");

  export const getProductNew = createSelector(state, (state) => {
    return state;
  });
}
