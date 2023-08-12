import { createAction, props } from "@ngrx/store";

import { Product } from "src/app/shared/interface/interfaces";

export namespace UserProductActions {
  export const getUserProduct = createAction("[PRODUCT] getUserProduct");
  export const setUserProduct = createAction(
    "[PRODUCT] setUserProduct",
    props<{
      product_list: Product[] | null;
      maxPage: number;
      currentPage: number;
      limit: number;
    }>()
  );
}

export interface UserProductState {
  products: Product[] | null;
  maxPage: number;
  currentPage: number;
  limit: number;
}

export const initialStateUserProduct: UserProductState = {
  products: null,
  maxPage: 1,
  currentPage: 1,
  limit: 10,
};
