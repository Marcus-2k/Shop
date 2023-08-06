import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Res,
  UseInterceptors,
  UploadedFiles,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { Response } from "express";
import { JwtAuthGuard } from "src/shared/guards/jwt.guard";
import { ProductService } from "./product.service";
import { Product } from "src/shared/interfaces/schemas/Product";
import { User } from "src/shared/decorators/user.decorator";
import { TokenData } from "src/shared/interfaces/token-data";
import { IdDto } from "src/shared/dto/id";
import { upload } from "src/shared/middleware/upload.middleware";
import { CreateProductDto, UpdateProduct } from "./product.dto";
import { MessageRes } from "src/shared/interfaces/res/message";
import { ProductUpdate } from "src/shared/interfaces/schemas/product/product-update";
import { CategoryService } from "../category/category.service";

@Controller("product")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
/** Guard */
@UseGuards(JwtAuthGuard)
export class ProductController {
  public constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) {}

  private minActionProcent: number = -5;

  @Get()
  public async getByUserProduct(
    @Res() response: Response<Product[]>,
    @User() user: TokenData,
  ): Promise<Response> {
    let product: Product[] = await this.productService.findByUser(user.id);

    return response.status(200).json(product);
  }

  @Get(":id")
  public async getByIdProduct(
    @Res() response: Response<any>,
    @Param() param: IdDto,
  ): Promise<Response<any>> {
    let product: Product = await this.productService.findById(param.id);

    let characteristicsName: any =
      this.categoryService.getCharacteristicsByCategory(product.category);

    product = JSON.parse(JSON.stringify(product));
    product.characteristicsName = characteristicsName;

    return response.status(200).json(product);
  }

  @Patch(":id")
  @UseInterceptors(FilesInterceptor("images", 8, upload))
  public async updateProduct(
    @Res() response: Response<any>,
    @Param() param: IdDto,
    @Body() body: UpdateProduct,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<Response<any>> {
    const product: Product | null = await this.productService.findById(
      param.id,
    );

    if (!product) {
      return response.status(404).json({ message: "Товар не існує" });
    }

    const updateProduct: ProductUpdate = {};

    // Photo
    // const imageSrc: string[] = product.imageSrc;
    // const imageSrcLink: string[] = body.imageSrc;

    // Name
    if (body.name) {
      updateProduct.name = body.name;
    }

    // Price
    if (body.price) {
      updateProduct.price = body.price;
    }

    // Discount
    // if (body.action === true || body.action === false) {
    //   if (body.action) {
    //     updateProduct.action = body.action;
    //   } else {
    //     updateProduct.actionPrice = -1;
    //   }
    // }

    // Counter & Status
    if (body.counter) {
      updateProduct.counter = body.counter;
    }

    if (body.status) {
      updateProduct.status = body.status;
    }

    // Category
    if (body.category && body.characteristics) {
      updateProduct.category = body.category;

      const categoryName: [string, string] | [string, string, string] | string =
        this.productService.createCategoryName(body.category);

      if (!Array.isArray(categoryName)) {
        return response.status(200).json({ message: categoryName });
      }
      updateProduct.categoryName = categoryName;
    }

    // Characteristics
    if (body.characteristics) {
      const characteristics:
        | string
        | {
            characteristicsNumber: number[][];
            characteristicsName: { [key: string]: string[] };
          } = this.productService.createCharacteristics(
        body.category,
        body.characteristics,
      );

      if (typeof characteristics === "string") {
        return response.status(200).json({ message: characteristics });
      }

      updateProduct.characteristics = characteristics.characteristicsNumber;
      updateProduct.characteristicsName = characteristics.characteristicsName;
    }

    // Keywords
    if (body.keywords) {
      updateProduct.keywords = body.keywords;
    }

    // Description
    if (body.description) {
      updateProduct.description = body.description;
    }

    if (Object.keys(updateProduct).length > 0) {
      await this.productService.updateProduct(param.id, updateProduct);

      return response.status(200).json({ message: "Товар успішно змінено" });
    } else {
      return response.status(200).json({ message: "Нових змін не відбулося" });
    }
  }

  @Post()
  @UseInterceptors(FilesInterceptor("images", 8, upload))
  public async createProduct(
    @Res() response: Response<MessageRes>,
    @Body() body: CreateProductDto,
    @User() user: TokenData,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<Response<MessageRes>> {
    // Images
    const imageSrc: string[] = [];

    if (files.length === 0) {
      return response
        .status(400)
        .json({ message: "Фото товару є обовз'язковим" });
    }

    for (let idx = 0; idx < files.length; idx++) {
      imageSrc.push(files[0].path);
    }

    // Name
    const name: string = body.name;

    // Price
    const price: number = body.price;

    // Discount
    const action: boolean = body.action;

    // Discount price
    let actionPrice: number = body.actionPrice;

    if (action) {
      if (actionPrice >= 0) {
        const actionProcent: number = ((actionPrice - price) / price) * 100;

        if (actionProcent > this.minActionProcent) {
          return response.status(400).json({
            message: `Акційна ціна повинна бути меншою за ціну на ${
              this.minActionProcent
            }%. Ваш відсоток знижки = ${actionProcent.toFixed(2)}%`,
          });
        }
      } else {
        return response
          .status(400)
          .json({ message: "Ви не вказали акційну ціну" });
      }
    } else {
      actionPrice = -1;
    }

    // Counter
    const counter: number = body.counter;

    // Status
    const status: number = body.status;

    // Category
    const category: string = body.category;
    const categoryName: [string, string] | [string, string, string] | string =
      this.productService.createCategoryName(body.category);

    if (!Array.isArray(categoryName)) {
      return response.status(200).json({ message: categoryName });
    }

    // Characteristics
    const characteristics:
      | string
      | {
          characteristicsNumber: number[][];
          characteristicsName: { [key: string]: string[] };
        } = this.productService.createCharacteristics(
      category,
      body.characteristics,
    );

    if (typeof characteristics === "string") {
      return response.status(200).json({ message: characteristics });
    }

    // Keywords
    const keywords: string[] = body.keywords;

    // Description
    const description: string = body.description;

    await this.productService.createProduct({
      imageSrc,
      name,
      price,
      actionPrice,
      counter,
      status,
      category,
      categoryName,
      characteristics: characteristics.characteristicsNumber,
      characteristicsName: characteristics.characteristicsName,
      keywords,
      description,
      comments: [],
      questions: [],
      accessories: [],
      user: user.id,
    });

    return response.status(201).json({ message: "Товар успішно створено" });
  }

  @Delete(":id")
  public async deleteProduct(
    @Res() response: Response<any>,
    @Param() param: IdDto,
    @User() user: TokenData,
  ): Promise<Response<any>> {
    let product = await this.productService.findById(param.id);

    if (!product) {
      return response.status(200).json({ message: "Товар не існує" });
    }

    if (user.id === product.user) {
      // await this.productService.deleteById(param.id);

      // await this.productService.deleteImgFromFolder(product.imageSrc);

      return response
        .status(200)
        .json({ message: "Товар успішно видалено", deleted: true });
    } else {
      return response
        .status(200)
        .json({ message: "Недостатньо прав доступу", deleted: false });
    }
  }
}
