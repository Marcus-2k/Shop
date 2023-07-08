import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "src/shared/interfaces/schemas/Product";

@Injectable()
export class ProductService {
  constructor(
    @InjectModel("product") private readonly ProductModel: Model<Product>
  ) {}

  public async findById(id: string): Promise<Product> {
    return await this.ProductModel.findById(id);
  }

  public async findByIds(ids: string[]): Promise<Product[]> {
    return await this.ProductModel.find({ _id: { $in: ids } });
  }
}
