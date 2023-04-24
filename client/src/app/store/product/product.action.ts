import { createAction, props } from "@ngrx/store";

import { Product } from "src/app/shared/interface/interfaces";

export namespace UserProductActions {
  export const getUserProduct = createAction("[PRODUCT] getUserProduct");
  export const setUserProduct = createAction(
    "[PRODUCT] setUserProduct",
    props<{ product_list: Product[] }>()
  );
}

export interface UserProductState {
  products: Product[] | null;
}

export const initialStateUserProduct: UserProductState = {
  products: null,
};
