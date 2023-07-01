import { Controller, Get } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Controller("product")
export class ProductController {
  constructor(
    @InjectModel("product") private readonly ProductModel: Model<any>
  ) {}

  @Get()
  async createProduct() {
    console.log("Server createProduct");

    const product: any = await this.ProductModel.find();

    return { product };
  }
}
