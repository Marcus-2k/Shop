import { createReducer, on } from "@ngrx/store";
import { OrderActions, initialStateOrder, OrderState } from "./order.action";

export const OrderReducer = createReducer(
  initialStateOrder,

  // CLear Data
  on(OrderActions.clearOrder, (state) => {
    return {
      orders: null,
      productCard_shoppingCart: null,
    };
  }),

  // Record Data to Store
  on(OrderActions.recordOrder, (state, props) => {
    const stateClone: OrderState = JSON.parse(JSON.stringify(state));
    stateClone.orders = props.orders_user;

    return stateClone;
  }),
  on(OrderActions.recordProductCard, (state, props) => {
    const stateClone: OrderState = JSON.parse(JSON.stringify(state));
    stateClone.productCard_shoppingCart = props.productCard_shoppingCart;

    return stateClone;
  }),

  // Stepper [selectedIndex]
  on(OrderActions.changeStepIndex, (state, props) => {
    const stateClone: OrderState = JSON.parse(JSON.stringify(state));

    if (stateClone.orders && stateClone.productCard_shoppingCart) {
      stateClone.orders[props.sequence_number_order].stepper.selectedIndex =
        props.selectedIndex;

      // Checking for 0 is not necessary because step for products defaults to true
      if (props.selectedIndex === 1) {
        stateClone.orders[
          props.sequence_number_order
        ].stepper.completedContacts = true;
      }
      if (props.selectedIndex === 2) {
        stateClone.orders[
          props.sequence_number_order
        ].stepper.completedShipping = true;
      }
      if (props.selectedIndex === 3) {
        stateClone.orders[
          props.sequence_number_order
        ].stepper.completedPayment = true;
      }
    }

    return stateClone;
  }),

  // Step Product >>> counter
  on(OrderActions.updateCounterProduct, (state, props) => {
    const stateClone: OrderState = JSON.parse(JSON.stringify(state));

    if (
      stateClone.orders !== null &&
      stateClone.productCard_shoppingCart !== null
    ) {
      stateClone.orders[props.sequence_number_order].product.info.counter[
        props.sequence_number_card
      ] += 1;
      stateClone.orders[
        props.sequence_number_order
      ].product.info.totalCounterProduct += 1;

      for (
        let index = 0;
        index <
        stateClone.orders[props.sequence_number_order].product.info.counter
          .length;
        index++
      ) {
        if (
          stateClone.orders[props.sequence_number_order].product.info.counter[
            index
          ] >
          stateClone.productCard_shoppingCart[props.sequence_number_order][
            index
          ].counter
        ) {
          stateClone.orders[props.sequence_number_order].valid.validProduct =
            false;
          break;
        } else {
          stateClone.orders[props.sequence_number_order].valid.validProduct =
            true;
        }
      }

      stateClone.orders[props.sequence_number_order].product.info.totalPrice +=
        stateClone.productCard_shoppingCart[props.sequence_number_order][
          props.sequence_number_card
        ].price;

      if (
        stateClone.productCard_shoppingCart[props.sequence_number_order][
          props.sequence_number_card
        ].action
      ) {
        stateClone.orders[
          props.sequence_number_order
        ].product.info.totalActionPrice +=
          stateClone.productCard_shoppingCart[props.sequence_number_order][
            props.sequence_number_card
          ].actionPrice;
      } else {
        stateClone.orders[
          props.sequence_number_order
        ].product.info.totalActionPrice +=
          stateClone.productCard_shoppingCart[props.sequence_number_order][
            props.sequence_number_card
          ].price;
      }
    }

    return stateClone;
  }),
  on(OrderActions.downdateCounterProduct, (state, props) => {
    const stateClone: OrderState = JSON.parse(JSON.stringify(state));

    if (
      stateClone.orders !== null &&
      stateClone.productCard_shoppingCart !== null
    ) {
      stateClone.orders[props.sequence_number_order].product.info.counter[
        props.sequence_number_card
      ] -= 1;

      stateClone.orders[
        props.sequence_number_order
      ].product.info.totalCounterProduct -= 1;

      for (
        let index = 0;
        index <
        stateClone.orders[props.sequence_number_order].product.info.counter
          .length;
        index++
      ) {
        if (
          stateClone.orders[props.sequence_number_order].product.info.counter[
            index
          ] >
          stateClone.productCard_shoppingCart[props.sequence_number_order][
            index
          ].counter
        ) {
          stateClone.orders[props.sequence_number_order].valid.validProduct =
            false;
          break;
        } else {
          stateClone.orders[props.sequence_number_order].valid.validProduct =
            true;
        }
      }

      stateClone.orders[props.sequence_number_order].product.info.totalPrice -=
        stateClone.productCard_shoppingCart[props.sequence_number_order][
          props.sequence_number_card
        ].price;

      if (
        stateClone.productCard_shoppingCart[props.sequence_number_order][
          props.sequence_number_card
        ].action
      ) {
        stateClone.orders[
          props.sequence_number_order
        ].product.info.totalActionPrice -=
          stateClone.productCard_shoppingCart[props.sequence_number_order][
            props.sequence_number_card
          ].actionPrice;
      } else {
        stateClone.orders[
          props.sequence_number_order
        ].product.info.totalActionPrice -=
          stateClone.productCard_shoppingCart[props.sequence_number_order][
            props.sequence_number_card
          ].price;
      }
    }

    return stateClone;
  }),
  // Step Product >>> Remove
  on(OrderActions.removeProductAfterEffects, (state, props) => {
    const stateClone: OrderState = JSON.parse(JSON.stringify(state));

    if (
      stateClone.orders !== null &&
      stateClone.productCard_shoppingCart !== null
    ) {
      if (
        stateClone.orders[props.sequence_number_order].product.info.product_id
          .length <= 1
      ) {
        stateClone.orders.splice(props.sequence_number_order, 1);
        stateClone.productCard_shoppingCart.splice(
          props.sequence_number_order,
          1
        );
        if (stateClone.orders.length === 0) {
          stateClone.orders = null;
          stateClone.productCard_shoppingCart = null;
        }
      } else {
        const counterDeletedProduct: number =
          stateClone.orders[props.sequence_number_order].product.info.counter[
            props.sequence_number_card
          ];

        stateClone.orders[
          props.sequence_number_order
        ].product.info.totalCounterProduct -= counterDeletedProduct;

        stateClone.orders[
          props.sequence_number_order
        ].product.info.totalPrice -=
          stateClone.productCard_shoppingCart[props.sequence_number_order][
            props.sequence_number_card
          ].price * counterDeletedProduct;
        if (
          stateClone.productCard_shoppingCart[props.sequence_number_order][
            props.sequence_number_card
          ].action
        ) {
          stateClone.orders[
            props.sequence_number_order
          ].product.info.totalActionPrice -=
            stateClone.productCard_shoppingCart[props.sequence_number_order][
              props.sequence_number_card
            ].actionPrice * counterDeletedProduct;
        } else {
          stateClone.orders[
            props.sequence_number_order
          ].product.info.totalActionPrice -=
            stateClone.productCard_shoppingCart[props.sequence_number_order][
              props.sequence_number_card
            ].price * counterDeletedProduct;
        }

        stateClone.productCard_shoppingCart[props.sequence_number_order].splice(
          props.sequence_number_card,
          1
        );
        stateClone.orders[
          props.sequence_number_order
        ].product.info.product_id.splice(props.sequence_number_card, 1);
        stateClone.orders[
          props.sequence_number_order
        ].product.info.counter.splice(props.sequence_number_card, 1);
      }
    }

    return stateClone;
  }),

  // Step Contacts >>> dataContacts
  on(OrderActions.updateContacts, (state, props) => {
    const stateClone: OrderState = JSON.parse(JSON.stringify(state));

    if (stateClone.orders && stateClone.productCard_shoppingCart) {
      stateClone.orders[props.sequence_number_order].contacts.info = props.info;
      stateClone.orders[props.sequence_number_order].valid.validContacts =
        props.valid;
    }

    return stateClone;
  }),
  // Step Shipping >>> dataShipping
  on(OrderActions.updateShipping, (state, props) => {
    const stateClone: OrderState = JSON.parse(JSON.stringify(state));

    if (stateClone.orders && stateClone.productCard_shoppingCart) {
      stateClone.orders[props.sequence_number_order].shipping.info = props.info;
      stateClone.orders[
        props.sequence_number_order
      ].shipping.selectTypeShipping = props.selectTypeShipping;
      stateClone.orders[
        props.sequence_number_order
      ].shipping.selectTypeShippingText = props.selectTypeShippingText;

      stateClone.orders[props.sequence_number_order].valid.validShipping =
        props.valid;
    }

    return stateClone;
  }),
  // Step Payment >>> dataPayment
  on(OrderActions.updatePayment, (state, props) => {
    const stateClone: OrderState = JSON.parse(JSON.stringify(state));

    if (stateClone.orders && stateClone.productCard_shoppingCart) {
      stateClone.orders[props.sequence_number_order].payment.selectTypePayment =
        props.selectTypePayment;
      stateClone.orders[
        props.sequence_number_order
      ].payment.selectTypePaymentText = props.selectTypePaymentText;

      stateClone.orders[props.sequence_number_order].valid.validPayment =
        props.valid;
    }

    return stateClone;
  }),

  // Api to Server
  on(OrderActions.toOrderFromServer, (state, props) => {
    const stateClone: OrderState = JSON.parse(JSON.stringify(state));

    console.log(props);

    return stateClone;
  })
);
