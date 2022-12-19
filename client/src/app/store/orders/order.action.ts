import { createAction, props } from "@ngrx/store";
import {
  OrderAction_updateCounterProduct,
  OrderAction_downdateCounterProduct,
  OrderAction_removeProduct,
  OrderAction_removeProductAfterEffects,
  OrderAction_updateContacts,
  OrderAction_updateShipping,
  OrderAction_updatePayment,
  OrderAction_changeStepIndex,
  OrderAction_toOrder,
  OrderAction_toOrderFromServer,
} from "src/app/shared/interface/interface-action/order.interfaces";

import {
  Order,
  ProductCard_ShoppingCart,
} from "../../shared/interface/interfaces";

export namespace OrderActions {
  // Record Data
  export const recordOrder = createAction(
    "recordOrder",
    props<{ orders_user: Order[] }>()
  );
  export const recordProductCard = createAction(
    "recordProductCard",
    props<{ productCard_shoppingCart: ProductCard_ShoppingCart[][] }>()
  );

  // Step Product
  export const updateCounterProduct = createAction(
    "updateCounterProduct",
    props<OrderAction_updateCounterProduct>()
  );
  export const downdateCounterProduct = createAction(
    "downdateCounterProduct",
    props<OrderAction_downdateCounterProduct>()
  );

  export const removeProduct = createAction(
    "removeProduct",
    props<OrderAction_removeProduct>()
  );
  export const removeProductAfterEffects = createAction(
    "removeProductAfterEffects",
    props<OrderAction_removeProductAfterEffects>()
  );
  // export const removeProductAfterEffectsError = createAction(
  //   "removeProductAfterEffectsError",
  //   props<{ error: any }>()
  // );

  // Step Contacts
  export const updateContacts = createAction(
    "updateContacts",
    props<OrderAction_updateContacts>()
  );

  // Step Shipping
  export const updateShipping = createAction(
    "updateShipping",
    props<OrderAction_updateShipping>()
  );
  // Step Payment
  export const updatePayment = createAction(
    "updatePayment",
    props<OrderAction_updatePayment>()
  );

  // Stepper
  export const changeStepIndex = createAction(
    "changeStepIndex",
    props<OrderAction_changeStepIndex>()
  );

  // Api to Server
  export const toOrder = createAction("toOrder", props<OrderAction_toOrder>());
  export const toOrderFromServer = createAction(
    "toOrderFromServer",
    props<OrderAction_toOrderFromServer>()
  );
}

export interface OrderState {
  orders: Order[] | null;
  productCard_shoppingCart: ProductCard_ShoppingCart[][] | null;
}

export const initialStateOrder: OrderState = {
  orders: null,
  productCard_shoppingCart: null,
};
