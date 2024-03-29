import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ProjectionType, QueryOptions } from "mongoose";
import { DeleteResult } from "mongodb";
import { Product } from "src/shared/interfaces/schemas/Product";
import { unlink } from "fs";
import { CATEGORY } from "src/shared/db/category";
import { Option } from "src/shared/interfaces/option";
import { ProductUpdate } from "src/shared/interfaces/schemas/product/product-update";
import { ProductNew } from "src/shared/interfaces/schemas/product/product-new";
import { MessageRes } from "src/shared/interfaces/res/message";
import { CategoryService } from "../category/category.service";
import { CategoryName } from "src/shared/interfaces/category-name";
import { CategoryNumber } from "src/shared/interfaces/category-number";

@Injectable()
export class ProductService {
  public constructor(
    @InjectModel("product") private readonly ProductModel: Model<Product>,
    private categoryService: CategoryService,
  ) {}

  public async findByUser(
    user_id: string,
    pagination: { limit: number; page: number },
  ): Promise<Product[] | null> {
    return await this.ProductModel.find({ user: user_id }, null, {
      limit: pagination.limit,
      skip: (pagination.page - 1) * pagination.limit,
    });
  }

  public async countByUser(user_id: string): Promise<number> {
    return await this.ProductModel.count({ user: user_id });
  }

  public async findById(
    id: string,
    projection?: ProjectionType<Product>,
    options?: QueryOptions<Product>,
  ): Promise<Product | null> {
    return await this.ProductModel.findById(id, projection, options);
  }

  public async findByIds(ids: string[]): Promise<Product[]> {
    return await this.ProductModel.find({ _id: { $in: ids } });
  }

  public async deleteById(id: string): Promise<DeleteResult> {
    return await this.ProductModel.deleteOne({ _id: id });
  }

  public async deleteImgFromFolder(imageSrc: string[]) {
    for (let idx = 0; idx < imageSrc.length; idx++) {
      unlink(imageSrc[idx], (err: NodeJS.ErrnoException) => {});
    }
  }

  public async createProduct(value: ProductNew): Promise<Product> {
    return (await this.ProductModel.create(value)).save();
  }

  public async updateProduct(
    id: string,
    updateProduct: ProductUpdate,
  ): Promise<Product> {
    return await this.ProductModel.findByIdAndUpdate<Product>(
      id,
      { $set: updateProduct },
      { new: true },
    );
  }

  public createCharacteristics(
    category: string,
    value: string,
  ):
    | string
    | {
        characteristicsNumber: number[][];
        characteristicsName: { [key: string]: string[] };
      } {
    const characteristicsNumber: number[][] = value.split("-").map((value) => {
      return value.split(",").map((string_number) => {
        return Number(string_number);
      });
    });

    const characteristics: Option[] | MessageRes =
      this.categoryService.getCharacteristicsByCategory(category)[0];
    if (!Array.isArray(characteristics)) {
      return characteristics.message;
    }

    if (characteristicsNumber.length !== characteristics.length) {
      return (
        "Вибрано " +
        characteristicsNumber.length +
        "/" +
        characteristics.length +
        " характеристик"
      );
    }

    const characteristicsName: { [key: string]: string[] } = {};
    for (let i = 0; i < characteristics.length; i++) {
      characteristicsName[characteristics[i].query_title] = [];

      if (characteristics[i].multiple) {
        for (let idx = 0; idx < characteristicsNumber[i].length; idx++) {
          characteristicsName[characteristics[i].query_title].push(
            characteristics[i].select[characteristicsNumber[i][idx]]
              .query_value,
          );
        }
      } else {
        characteristicsName[characteristics[i].query_title].push(
          characteristics[i].select[characteristicsNumber[i][0]].query_value,
        );
      }
    }

    let index: number = 0;
    for (const key in characteristicsName) {
      if (characteristicsName[key].indexOf(undefined) >= 0) {
        return `Для характеристики "${characteristics[index].name}" вибрано не існуюче значення`;
      }

      index++;
    }

    return { characteristicsNumber, characteristicsName };
  }

  public validateStatus(status: number): boolean {
    if (isNaN(status) === false) {
      if (status >= 0 && status <= 3) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  public createCategoryName(category: string): CategoryName | string {
    const categoryNumber: CategoryNumber | MessageRes =
      this.categoryService.getCategoryNumberByCategory(category);
    if (!Array.isArray(categoryNumber)) {
      return categoryNumber.message;
    }

    const categoryName: CategoryName = [
      CATEGORY[categoryNumber[0]].nameCategory,
      CATEGORY[categoryNumber[0]].nameListCategory[categoryNumber[1]]
        .subNameCategory,
    ];

    if (category.length === 3) {
      categoryName.push(
        CATEGORY[categoryNumber[0]].nameListCategory[categoryNumber[1]]
          .subNameListCategory[categoryNumber[2]].titleSubNameListCategory,
      );
    }

    return categoryName;
  }
}
