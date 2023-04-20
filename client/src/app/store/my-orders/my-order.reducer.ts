import { createReducer, on } from "@ngrx/store";
import { initialStateFavorite, MyOrderActions } from "./my-order.action";

export const MyOrderReducer = createReducer(
  initialStateFavorite,

  on(MyOrderActions.requestFromServer, (state, props) => {
    const stateClone = JSON.parse(JSON.stringify(state));

    stateClone.myOrder = props.MyOrder;
    stateClone.productCard_MyOrder = props.ProductCard_MyOrder;

    return stateClone;
  }),
  on(MyOrderActions.errorFromServer, (state, props) => {
    const stateClone = JSON.parse(JSON.stringify(state));

    return stateClone;
  })
);
