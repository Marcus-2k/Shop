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

@Injectable()
export class ProductService {
  public constructor(
    @InjectModel("product") private readonly ProductModel: Model<Product>,
    private categoryService: CategoryService,
  ) {
    // this.test();
  }

  public async test() {
    const start = new Date();
    console.log("START = ", start.toISOString());
    console.log("START = ", start.getTime());

    const notebooks: Option[][] | MessageRes =
      this.categoryService.getCharacteristicsByCategory("notebooks");

    if (!Array.isArray(notebooks)) {
      return;
    }

    const characteristics: Option[] = notebooks[0];

    for (let i = 0; i < 10000; i++) {
      console.log("START CREATE PRODUCT");

      let value: string = "";
      for (let idx = 0; idx < characteristics.length; idx++) {
        const min = 0;
        const max = Number(characteristics[idx].select.length) - 1;

        const random = Math.floor(Math.random() * (max - min + 1)) + min;

        if (idx === 0) {
          value = value + String(random);
        } else value = value + "-" + random;
      }

      const info = this.createCharacteristics("notebooks", value);

      if (typeof info === "string") {
        return;
      }

      const data = await this.createProduct({
        imageSrc: [
          "uploads/06022023-143314 707-175333147.webp",
          "uploads/06022023-143314 711-175333148.webp",
        ],
        name: "Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C) Charcoal Black",
        price: 39999,
        actionPrice: 11000,
        counter: 11,
        status: 0,
        category: "notebooks",
        categoryName: ["Ноутбуки та комп'ютери", "Ноутбуки"],
        characteristics: info.characteristicsNumber,
        characteristicsName: info.characteristicsName,
        keywords: ["ноут", "laptop"],
        description:
          "Екран 15.6' IPS (1920x1080) Full HD, матовий / AMD Ryzen 5 5500U (2.1 - 4.0 ГГц) / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / без ОС / 2.15 кг / чорний",
        comments: [],
        questions: [],
        accessories: [],
        user: "63dee8e3d56e71f4d09a4510",
      });
      console.log("data = ", data);
      console.log("END CREATE PRODUCT");
    }

    const end = new Date();
    console.log("END = ", end.toISOString());
    console.log("END = ", end.getTime());
    console.log("==============================");
    console.log("RESULT = ", end.getTime() - start.getTime());
  }

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

  public createCategoryName(
    category: string,
  ): [string, string] | [string, string, string] | string {
    const categoryNumber:
      | [number, number]
      | [number, number, number]
      | MessageRes = this.categoryService.getCategoryNumberByCategory(category);
    if (!Array.isArray(categoryNumber)) {
      return categoryNumber.message;
    }

    const categoryName: [string, string] | [string, string, string] = [
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
