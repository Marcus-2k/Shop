import { OrderContacts, OrderShipping } from "../interfaces";

export interface OrderAction_updateCounterProduct {
  sequence_number_order: number;
  sequence_number_card: number;
}
export interface OrderAction_downdateCounterProduct {
  sequence_number_order: number;
  sequence_number_card: number;
}

export interface OrderAction_removeProduct {
  sequence_number_order: number;
  sequence_number_card: number;
  product_id: string;
}

export interface OrderAction_removeProductAfterEffects {
  sequence_number_order: number;
  sequence_number_card: number;
}

export interface OrderAction_updateContacts {
  info: OrderContacts;
  valid: boolean;
  sequence_number_order: number;
}

export interface OrderAction_updateShipping {
  info: OrderShipping;
  selectTypeShipping: 0 | 1 | 2 | null;
  selectTypeShippingText: string | null;
  sequence_number_order: number;
  valid: boolean;
}

export interface OrderAction_updatePayment {
  selectTypePayment: 0 | 1 | 2 | 3 | 4 | 5 | null;
  selectTypePaymentText: string | null;
  sequence_number_order: number;
  valid: boolean;
}

export interface OrderAction_changeStepIndex {
  selectedIndex: number;
  sequence_number_order: number;
}

export interface OrderAction_toOrder {
  sequence_number_order: number;
}
export interface OrderAction_toOrderFromServer {
  message: string;
}
