import {
  Controller,
  UsePipes,
  ValidationPipe,
  Get,
  Query,
  Res,
} from "@nestjs/common";
import { Response } from "express";
import { GetGuestCartDto, GetHistoryGuestDto } from "./guest.dto";
import { Product } from "src/shared/interfaces/schemas/Product";
import { ProductService } from "../product/product.service";

@Controller("guest")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
export class GuestController {
  constructor(private readonly productService: ProductService) {}

  @Get("history") async getHistoryGuest(
    @Res() response: Response<{ history__view: Product[] }>,
    @Query() query: GetHistoryGuestDto
  ): Promise<Response<{ history__view: Product[] }>> {
    const history__view: Product[] = await this.productService.findByIds(
      query.history_view
    );

    return response.status(200).json({ history__view });
  }

  @Get() async getGuestCart(
    @Res() response: Response<any>,
    @Query() query: GetGuestCartDto
  ): Promise<Response<any>> {
    const products: Product[] = await this.productService.findByIds(
      query.carts_id
    );

    for (let idx = 0; idx < products.length; idx++) {
      (products[idx].imageSrc as any) = products[idx].imageSrc[0];
    }

    return response.status(200).json(products);
  }
}
