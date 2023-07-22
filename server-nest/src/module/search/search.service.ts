import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, FilterQuery, ProjectionType, QueryOptions } from "mongoose";

import { Product } from "src/shared/interfaces/schemas/Product";

import { CategoryService } from "../category/category.service";

@Injectable()
export class SearchService {
  public constructor(
    @InjectModel("product") private readonly ProductModel: Model<Product>
  ) {}

  public async search(
    filter: FilterQuery<Product>,
    projection?: ProjectionType<Product> | null | undefined,
    options?: QueryOptions<Product> | null | undefined
  ): Promise<Product[]> {
    return await this.ProductModel.find(filter, projection, options);
  }

  public async countBySearch(filter: FilterQuery<Product>): Promise<any> {
    return await this.ProductModel.count(filter);
  }
}
