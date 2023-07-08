import { Document } from "mongoose";
import { OrderInfo } from "./order/order-info";
import { OrderProduct } from "./order/order-product";
import { OrderContacts } from "./order/order-contacts";
import { OrderShipping } from "./order/order-shipping";
import { OrderPayment } from "./order/order-paymant";

export interface Order extends Document {
  info: OrderInfo;
  product: OrderProduct;
  contacts: OrderContacts;
  shipping: OrderShipping;
  payment: OrderPayment;
}
