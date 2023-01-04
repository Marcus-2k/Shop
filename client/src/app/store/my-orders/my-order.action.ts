import { createAction, props } from "@ngrx/store";

import { MyOrder } from "src/app/shared/interface/interfaces";
import { ProductCard_MyOrder } from "src/app/shared/interface/product-card/product-card.interfaces";

export namespace MyOrderActions {
  export const getMyOrder = createAction("getMyOrder");

  export const requestFromServer = createAction(
    "requestFromServer",
    props<{
      MyOrder: MyOrder[];
      ProductCard_MyOrder: ProductCard_MyOrder[][];
    }>()
  );
  export const errorFromServer = createAction("errorFromServer", props<any>());
}

export interface MyOrderUserState {
  myOrder: MyOrder[] | null;
  productCard_MyOrder: ProductCard_MyOrder[][] | null;
}

export const initialStateFavorite: MyOrderUserState = {
  myOrder: null,
  productCard_MyOrder: null,
};
