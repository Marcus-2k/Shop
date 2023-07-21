import {
  Controller,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Get,
  Post,
  Body,
  Res,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JwtAuthGuard } from "src/shared/guards/jwt.guard";
import { OrderService } from "./order.service";
import { User as UserData } from "src/shared/decorators/user.decorator";
import { ProductService } from "../product/product.service";
import { CreateOrderDto } from "./order.dto";
/** Interface */
import { Response } from "express";
import { Order } from "src/shared/interfaces/schemas/Order";
import { TokenData } from "src/shared/interfaces/token-data";
import { User } from "src/shared/interfaces/schemas/User";
import { Product } from "src/shared/interfaces/schemas/Product";
import { OrderPayment } from "src/shared/interfaces/schemas/order/order-paymant";
import { OrderShipping } from "src/shared/interfaces/schemas/order/order-shipping";
import { OrderContacts } from "src/shared/interfaces/schemas/order/order-contacts";
import { OrderProduct } from "src/shared/interfaces/schemas/order/order-product";
import { OrderInfo } from "src/shared/interfaces/schemas/order/order-info";
import { MessageRes } from "src/shared/interfaces/res/message";

@Controller("order")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
/** Guard */
@UseGuards(JwtAuthGuard)
export class OrderController {
  public constructor(
    private readonly orderService: OrderService,
    private readonly productService: ProductService,
    @InjectModel("user") private readonly UserModel: Model<User>
  ) {}

  @Get()
  public async getOrdersByUser(
    @Res()
    response: Response<{ MyOrder: Order[]; ProductCard_MyOrder: Product[] }>,
    @UserData() user: TokenData
  ): Promise<Response<{ MyOrder: Order[]; ProductCard_MyOrder: Product[] }>> {
    const order: Order[] = await this.orderService.findByMerchantId(user.id);
    const orderClone: Order[] = JSON.parse(JSON.stringify(order));

    const productCard_MyOrder = [];

    for (let idx = 0; idx < orderClone.length; idx++) {
      for (let i = 0; i < orderClone[idx].product.info.product_id.length; i++) {
        const product = await this.productService.findById(
          orderClone[idx].product.info.product_id[i]
        );

        if (i === 0) {
          productCard_MyOrder.push([product]);
        } else {
          productCard_MyOrder[idx].push(product);
        }
      }

      const seller: User = await this.UserModel.findById(
        orderClone[idx].info.seller,
        { name: 1, lastName: 1, _id: 0 }
      );

      (orderClone[idx].info as any).sellerName =
        seller.name +
        (seller.lastName ? " " : "") +
        (seller.lastName ? seller.lastName : "");
    }

    return response
      .status(200)
      .json({ MyOrder: orderClone, ProductCard_MyOrder: productCard_MyOrder });
  }

  @Post()
  public async createOrder(
    @Res() response: Response<MessageRes>,
    @Body() body: CreateOrderDto
  ): Promise<Response<MessageRes>> {
    const productByListId: Product[] = await this.productService.findByIds(
      body.product.info.product_id
    );

    if (productByListId.length === body.product.info.product_id.length) {
    } else {
      // Not all products found
      console.log("Not all products found");
    }

    const dateNow: Date = new Date();
    const status: number = 0; // 0 - new, 1 - payment, 2 - sent , 3 - return, 4 - delivered, 5 - done

    const info: OrderInfo = {
      seller: body.info.seller,
      merchant: body.info.merchant,
      dateOfCreation: dateNow,
      dateOfDispatch: null,
      orderID: `${this.orderService.generateRandomWord()}${dateNow.getMonth()}${dateNow.getFullYear()}${dateNow.getMinutes()}${dateNow.getHours()}${dateNow.getSeconds()}${dateNow.getDate()}`,
      status,
    };

    const product: OrderProduct = {
      info: {
        product_id: body.product.info.product_id,
        counter: body.product.info.counter,
        totalPrice: body.product.info.totalPrice,
        totalActionPrice: body.product.info.totalActionPrice,
        totalCounterProduct: body.product.info.totalCounterProduct,
      },
    };

    const contacts: OrderContacts = {
      info: {
        name: body.contacts.info.name,
        email: body.contacts.info.email,
        tel: body.contacts.info.tel,
      },
    };

    const shipping: OrderShipping = {
      info: {
        addressesPresent: body.shipping.info.addressesPresent,
        addressesMainDescription: body.shipping.info.addressesMainDescription,
        addressesWarehousesDescription:
          body.shipping.info.addressesWarehousesDescription,
      },
      selectTypeShipping: body.shipping.selectTypeShipping,
      selectTypeShippingText: body.shipping.selectTypeShippingText,
    };

    const payment: OrderPayment = {
      info: {},
      selectTypePayment: body.payment.selectTypePayment,
      selectTypePaymentText: body.payment.selectTypePaymentText,
    };

    await this.orderService.createOrder(
      info,
      product,
      contacts,
      shipping,
      payment
    );

    return response
      .status(200)
      .json({ message: "Замовлення успішно створено" });
  }
}
