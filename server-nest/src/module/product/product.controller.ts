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
  Query,
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
import { PaginationDto } from "src/shared/dto/pagination";
import { PaginationRes } from "src/shared/interfaces/res/pagintaion";
import { CategoryName } from "src/shared/interfaces/category-name";
import { SuccessRes } from "src/shared/interfaces/res/success";

@Controller("product")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
/** Guard */
@UseGuards(JwtAuthGuard)
export class ProductController {
  public constructor(
    private service: ProductService,
    private categoryService: CategoryService,
  ) {}

  private minActionProcent: number = -5;

  @Get()
  public async getByUserProduct(
    @Res() response: Response<{ products: Product[] } & PaginationRes>,
    @Query() query: PaginationDto,
    @User() user: TokenData,
  ): Promise<Response> {
    // Pagination START ============================================================================
    const limit: number = query.limit;

    let currentPage: number = query.page;

    const count: number = await this.service.countByUser(user.id);
    let maxPage!: number;
    // Pagination END ==============================================================================

    const products: Product[] = await this.service.findByUser(user.id, {
      limit: query.limit,
      page: query.page,
    });

    maxPage = Math.ceil(count / limit);

    if (limit === maxPage * limit) {
      currentPage = 1;
    }

    return response.status(200).json({
      products,
      maxPage: maxPage,
      currentPage: currentPage,
      limit: query.limit,
    });
  }

  @Get(":id")
  public async getByIdProduct(
    @Res() response: Response<Product>,
    @Param() param: IdDto,
  ): Promise<Response> {
    let product: Product = await this.service.findById(param.id);

    let characteristicsName: any =
      this.categoryService.getCharacteristicsByCategory(product.category);

    product = JSON.parse(JSON.stringify(product));
    product.characteristicsName = characteristicsName[0];

    return response.status(200).json(product);
  }

  @Patch(":id")
  @UseInterceptors(FilesInterceptor("images", 8, upload))
  public async updateProduct(
    @Res() response: Response<MessageRes & SuccessRes>,
    @Param() param: IdDto,
    @Body() body: UpdateProduct,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<Response> {
    const product: Product | null = await this.service.findById(param.id);

    if (!product) {
      return response
        .status(404)
        .json({ message: "Товар не існує", success: false });
    }

    const updateProduct: ProductUpdate = {};
    // Images
    if (files.length > 0) {
      /* Add if body.imageSrc (request from postman) */

      const deletedImageFromLocal: string[] = product.imageSrc.filter(
        (item) => !body.imageSrc.includes(item),
      );

      this.service.deleteImgFromFolder(deletedImageFromLocal);

      const imageSrc: string[] = [];
      let number_photo: number = 0;
      for (let idx = 0; idx < body.imageSrc.length; idx++) {
        if (body.imageSrc[idx] === "file") {
          imageSrc[idx] = files[number_photo].path;

          number_photo += 1;
        } else {
          imageSrc[idx] = body.imageSrc[idx];
        }
      }
      updateProduct.imageSrc = imageSrc;
    } else {
      if (body.imageSrc) {
        const deletedImageFromLocal: string[] = product.imageSrc.filter(
          (item) => !body.imageSrc.includes(item),
        );

        updateProduct.imageSrc = body.imageSrc;

        this.service.deleteImgFromFolder(deletedImageFromLocal);
      }
    }

    // Name
    if (body.name) {
      updateProduct.name = body.name;
    }

    // Price
    if (body.price) {
      updateProduct.price = body.price;
    }

    // Discount
    if (body.discountPrice !== undefined) {
      updateProduct.discountPrice = body.discountPrice;
    }

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

      const categoryName: CategoryName | string =
        this.service.createCategoryName(body.category);

      if (!Array.isArray(categoryName)) {
        return response
          .status(200)
          .json({ message: categoryName, success: false });
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
          } = this.service.createCharacteristics(
        body.category,
        body.characteristics,
      );

      if (typeof characteristics === "string") {
        return response
          .status(200)
          .json({ message: characteristics, success: false });
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
      await this.service.updateProduct(param.id, updateProduct);

      return response
        .status(200)
        .json({ message: "Товар успішно змінено", success: true });
    } else {
      return response
        .status(200)
        .json({ message: "Нових змін не відбулося", success: true });
    }
  }

  @Post()
  @UseInterceptors(FilesInterceptor("images", 8, upload))
  public async createProduct(
    @Res() response: Response<MessageRes & SuccessRes>,
    @Body() body: CreateProductDto,
    @User() user: TokenData,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): Promise<Response> {
    // Images
    const imageSrc: string[] = [];

    if (files.length === 0) {
      return response
        .status(400)
        .json({ message: "Фото товару є обовз'язковим", success: false });
    }

    for (let idx = 0; idx < files.length; idx++) {
      imageSrc.push(files[0].path);
    }

    // Name
    const name: string = body.name;

    // Price
    const price: number = body.price;

    // Discount
    const discountPrice: number | null = body.discountPrice;

    if (discountPrice !== null) {
      const discountProcent: number = ((discountPrice - price) / price) * 100;

      if (discountProcent > this.minActionProcent) {
        return response.status(400).json({
          message: `Акційна ціна повинна бути меншою за ціну на ${
            this.minActionProcent
          }%. Ваш відсоток знижки = ${discountProcent.toFixed(2)}%`,
          success: false,
        });
      }
    }

    // Counter
    const counter: number = body.counter;

    // Status
    const status: number = body.status;

    // Category
    const category: string = body.category;
    const categoryName: CategoryName | string = this.service.createCategoryName(
      body.category,
    );

    if (!Array.isArray(categoryName)) {
      return response
        .status(200)
        .json({ message: categoryName, success: false });
    }

    // Characteristics
    const characteristics:
      | string
      | {
          characteristicsNumber: number[][];
          characteristicsName: { [key: string]: string[] };
        } = this.service.createCharacteristics(category, body.characteristics);

    if (typeof characteristics === "string") {
      return response
        .status(200)
        .json({ message: characteristics, success: false });
    }

    // Keywords
    const keywords: string[] = body.keywords;

    // Description
    const description: string = body.description;

    await this.service.createProduct({
      imageSrc,
      name,
      price,
      discountPrice,
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

    return response
      .status(201)
      .json({ message: "Товар успішно створено", success: false });
  }

  @Delete(":id")
  public async deleteProduct(
    @Res() response: Response<MessageRes & { deleted: boolean }>,
    @Param() param: IdDto,
    @User() user: TokenData,
  ): Promise<Response> {
    let product = await this.service.findById(param.id);

    if (!product) {
      return response
        .status(200)
        .json({ message: "Товар не існує", deleted: false });
    }

    if (user.id === product.user) {
      // await this.service.deleteById(param.id);

      // await this.service.deleteImgFromFolder(product.imageSrc);

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
