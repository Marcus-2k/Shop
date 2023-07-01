import { Document } from "mongoose";

export interface Order extends Document {
  info: {
    seller: string;
    merchant: string;
    dateOfCreation: Date;
    dateOfDispatch: Date;
    orderID: string;
    status: number;
  };
  product: {
    info: {
      product_id: string[];
      counter: number[];
      totalPrice: number;
      totalActionPrice: number;
      totalCounterProduct: number;
    };
  };
  contacts: {
    info: {
      name: string;
      email: string;
      tel: string;
    };
  };
  shipping: {
    info: {
      addressesPresent: string;
      addressesMainDescription: string;
      addressesWarehousesDescription: string;
    };
    selectTypeShipping: number;
    selectTypeShippingText: string;
  };
  payment: {
    info: Object;
    selectTypePayment: number;
    selectTypePaymentText: string;
  };
}
