import { OrderInfo } from "src/shared/interfaces/schemas/order/order-info";
import { OrderProduct } from "src/shared/interfaces/schemas/order/order-product";
import { OrderContacts } from "src/shared/interfaces/schemas/order/order-contacts";
import { OrderShipping } from "src/shared/interfaces/schemas/order/order-shipping";
import { OrderPayment } from "src/shared/interfaces/schemas/order/order-paymant";

export class CreateOrderDto {
  info: OrderInfo;
  product: OrderProduct;
  contacts: OrderContacts;
  shipping: OrderShipping;
  payment: OrderPayment;
}
