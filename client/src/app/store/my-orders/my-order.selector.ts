import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MyOrderUserState } from "./my-order.action";

export namespace MyOrderSelector {
  export const state = createFeatureSelector<MyOrderUserState>("myOrderUser");

  export const getmMyOrder = createSelector(state, (state) => {
    return state;
  });
}
