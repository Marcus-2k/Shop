import {
  Controller,
  Get,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JwtAuthGuard } from "src/shared/guards/jwt.guard";

@Controller("product")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
/** Guard */
@UseGuards(JwtAuthGuard)
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
