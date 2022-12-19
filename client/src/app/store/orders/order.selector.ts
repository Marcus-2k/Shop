import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrderState } from "./order.action";

export namespace OrderSelector {
  export const state = createFeatureSelector<OrderState>("ordersUser");

  export const ordersChecking = createSelector(state, (state) => {
    if (state.orders === null || state.productCard_shoppingCart === null) {
      return false;
    } else {
      return true;
    }
  });

  export const getOrdersUser = createSelector(state, (state) => {
    if (state.orders !== null) {
      return state.orders;
    } else {
      return null;
    }
  });
  export const getOrdersUserByIndex = (sequence_number_order: number) =>
    createSelector(state, (state) => {
      if (state.orders !== null) {
        return state.orders[sequence_number_order];
      } else {
        return null;
      }
    });

  export const getStepper = (sequence_number_order: number) =>
    createSelector(state, (state) => {
      if (state.orders !== null) {
        if (state.orders[sequence_number_order] !== undefined) {
          return state.orders[sequence_number_order].stepper;
        } else {
          return null;
        }
      } else {
        return null;
      }
    });
  export const getValid = (sequence_number_order: number) =>
    createSelector(state, (state) => {
      if (state.orders !== null) {
        if (state.orders[sequence_number_order] !== undefined) {
          return state.orders[sequence_number_order].valid;
        } else {
          return null;
        }
      } else {
        return null;
      }
    });

  export const getProduct = (sequence_number_order: number) =>
    createSelector(state, (state) => {
      if (state.orders !== null) {
        if (state.orders[sequence_number_order] !== undefined) {
          return state.orders[sequence_number_order].product;
        } else {
          return null;
        }
      } else {
        return null;
      }
    });
  export const getProductCard = (sequence_number_order: number) =>
    createSelector(state, (state) => {
      if (state.productCard_shoppingCart !== null) {
        if (
          state.productCard_shoppingCart[sequence_number_order] !== undefined
        ) {
          return state.productCard_shoppingCart[sequence_number_order];
        } else {
          return null;
        }
      } else {
        return null;
      }
    });

  export const getContacts = (sequence_number_order: number) =>
    createSelector(state, (state) => {
      if (state.orders !== null) {
        return state.orders[sequence_number_order].contacts;
      } else {
        return null;
      }
    });

  export const getShipping = (sequence_number_order: number) =>
    createSelector(state, (state) => {
      if (state.orders !== null) {
        return state.orders[sequence_number_order].shipping;
      } else {
        return null;
      }
    });

  export const getPayment = (sequence_number_order: number) =>
    createSelector(state, (state) => {
      if (state.orders !== null) {
        return state.orders[sequence_number_order].payment;
      } else {
        return null;
      }
    });

  export const getAside = (sequence_number_order: number) =>
    createSelector(state, (state) => {
      if (state.orders !== null) {
        if (state.orders[sequence_number_order] !== undefined) {
          const stateAside = {
            totalPrice:
              state.orders[sequence_number_order].product.info.totalPrice,
            totalActionPrice:
              state.orders[sequence_number_order].product.info.totalActionPrice,
            totalCounterProduct:
              state.orders[sequence_number_order].product.info
                .totalCounterProduct,
          };

          return stateAside;
        } else {
          return null;
        }
      } else {
        return null;
      }
    });
}
