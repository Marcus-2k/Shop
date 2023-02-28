import { createReducer, on } from "@ngrx/store";
import {
  initialStateProductNew,
  ProductNewActions,
} from "./product-new.action";

export const ProductNewReducer = createReducer(
  initialStateProductNew,

  on(ProductNewActions.updateDescription, (state, props) => {
    const stateClone = JSON.parse(JSON.stringify(state));

    if (stateClone.dataProduct !== null) {
      stateClone.dataProduct.description = props.descriptionValue;
    }

    return stateClone;
  })
);
