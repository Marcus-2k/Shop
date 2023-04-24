import { createReducer, on } from "@ngrx/store";
import {
  UserProductActions,
  UserProductState,
  initialStateUserProduct,
} from "./product.action";

export const UserProductReducer = createReducer(
  initialStateUserProduct,

  on(UserProductActions.getUserProduct, (state) => {
    return state;
  }),
  on(UserProductActions.setUserProduct, (state, props) => {
    const STATE: UserProductState = {
      products: props.product_list,
    };

    return STATE;
  })
);
