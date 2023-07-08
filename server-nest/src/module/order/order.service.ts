import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ORDER_ID_WORD } from "src/shared/constants/order-id-word";
import { Order } from "src/shared/interfaces/schemas/Order";
import { OrderContacts } from "src/shared/interfaces/schemas/order/order-contacts";
import { OrderInfo } from "src/shared/interfaces/schemas/order/order-info";
import { OrderPayment } from "src/shared/interfaces/schemas/order/order-paymant";
import { OrderProduct } from "src/shared/interfaces/schemas/order/order-product";
import { OrderShipping } from "src/shared/interfaces/schemas/order/order-shipping";

@Injectable()
export class OrderService {
  constructor(
    @InjectModel("order") private readonly OrderModel: Model<Order>
  ) {}

  public async findByMerchantId(id: string): Promise<Order[]> {
    return await this.OrderModel.find({ "info.merchant": id });
  }

  public async createOrder(
    info: OrderInfo,
    product: OrderProduct,
    contacts: OrderContacts,
    shipping: OrderShipping,
    payment: OrderPayment
  ): Promise<Order> {
    const order: Order = await this.OrderModel.create({
      info,
      product,
      contacts,
      shipping,
      payment,
    });

    return await order.save();
  }

  public generateRandomWord(): string {
    const orderIdWord: string[] = ORDER_ID_WORD;

    const randomNumber: number = Number(
      Math.random().toString().split(".")[1].charAt(0)
    );

    return orderIdWord[randomNumber];
  }
}
