import {
  Controller,
  UsePipes,
  ValidationPipe,
  Get,
  Param,
  Res,
} from "@nestjs/common";
import { Response } from "express";
import { IdDto } from "src/shared/dto/id";
import { ProductService } from "../product/product.service";
import { CATEGORY } from "src/shared/db/category";
import { Product } from "src/shared/interfaces/schemas/Product";
import { MessageRes } from "src/shared/interfaces/res/message";
import { Option } from "src/shared/interfaces/option";
import { Breadcrumbs } from "src/shared/interfaces/widget/breadcrumbs";
import { CATALOG } from "src/shared/db/catalog";
import { CategoryService } from "../category/category.service";
import { CategoryNumber } from "src/shared/interfaces/category-number";

@Controller("card")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
export class CardController {
  public constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  @Get(":id")
  public async getByIdCard(
    @Res()
    response: Response<
      { product: Product; widget_breadcrumbs: Breadcrumbs } | MessageRes
    >,
    @Param() param: IdDto
  ): Promise<Response> {
    const productInfo: Product | null = await this.productService.findById(
      param.id,

      {
        imageSrc: true,
        name: true,
        price: true,
        action: true,
        actionPrice: true,
        counter: true,
        category: true,
        status: true,
        user: true,
      }
    );

    if (productInfo) {
      const categoryNumber: CategoryNumber | MessageRes =
        this.categoryService.getCategoryNumberByCategory(productInfo.category);

      if (!Array.isArray(categoryNumber)) {
        return response.status(404).json({ message: "Такий товар не існує" });
      }

      const widget_breadcrumbs: Breadcrumbs = {
        first: {
          name: CATALOG[categoryNumber[0]].nameCategory,
          link: CATALOG[categoryNumber[0]].navigate_link,
        },
        second: {
          name: CATALOG[categoryNumber[0]].nameListCategory[categoryNumber[1]]
            .subNameCategory,
          link: CATALOG[categoryNumber[0]].nameListCategory[categoryNumber[1]]
            .navigate_link,
        },
        third: undefined,
        location: { name: productInfo.name, link: productInfo.name },
      };

      return response
        .status(200)
        .json({ product: productInfo, widget_breadcrumbs: widget_breadcrumbs });
    } else {
      return response.status(404).json({ message: "Такий товар не існує" });
    }
  }

  @Get(":id/info")
  public async getByIdCardInfo(
    @Res() response: Response<Product | MessageRes>,
    @Param() param: IdDto
  ): Promise<Response> {
    const productComments: Product | null = await this.productService.findById(
      param.id,
      { imageSrc: true, description: true }
    );

    if (productComments) {
      return response.status(200).json(productComments);
    } else {
      return response.status(404).json({ message: "Такий товар не існує" });
    }
  }

  @Get(":id/characteristics")
  public async getByIdCardCharacteristics(
    @Res()
    response: Response<
      | {
          characteristics: number[][];
          characteristicsName: Option[];
        }
      | MessageRes
    >,
    @Param() param: IdDto
  ): Promise<Response> {
    const product: Product | null = await this.productService.findById(
      param.id,
      {
        category: true,
        characteristics: true,
      }
    );

    if (product) {
      const characteristicsName: Option[] | MessageRes =
        this.categoryService.getCharacteristicsByCategory(product.category);

      if (!Array.isArray(characteristicsName)) {
        return response.status(404).json({ message: "Такий товар не існує" });
      }

      return response.status(200).json({
        characteristics: product.characteristics,
        characteristicsName: characteristicsName,
      });
    } else {
      return response.status(404).json({ message: "Такий товар не існує" });
    }
  }

  @Get(":id/comments")
  public async getByIdCardComments(
    @Res() response: Response<Product | MessageRes>,
    @Param() param: IdDto
  ): Promise<Response> {
    const productComments: Product | null = await this.productService.findById(
      param.id,
      { comments: true }
    );

    if (productComments) {
      return response.status(200).json(productComments);
    } else {
      return response.status(404).json({ message: "Такий товар не існує" });
    }
  }

  @Get(":id/questions")
  public async getByIdCardQuestions(
    @Res() response: Response<Product | MessageRes>,
    @Param() param: IdDto
  ): Promise<Response> {
    const productQuestions: Product | null = await this.productService.findById(
      param.id,
      { questions: true }
    );

    if (productQuestions) {
      return response.status(200).json(productQuestions);
    } else {
      return response.status(404).json({ message: "Такий товар не існує" });
    }
  }

  @Get(":id/photo")
  public async getByIdCardPhoto(
    @Res() response: Response<Product | MessageRes>,
    @Param() param: IdDto
  ): Promise<Response> {
    const productPhoto: Product | null = await this.productService.findById(
      param.id,
      { imageSrc: true }
    );

    if (productPhoto) {
      return response.status(200).json(productPhoto);
    } else {
      return response.status(404).json({ message: "Такий товар не існує" });
    }
  }

  @Get(":id/accessories")
  public async getByIdCardAccessories(
    @Res() response: Response<Product | MessageRes>,
    @Param() param: IdDto
  ): Promise<Response> {
    const productAccessories: Product | null =
      await this.productService.findById(param.id, { accessories: true });

    if (productAccessories) {
      return response.status(200).json(productAccessories);
    } else {
      return response.status(404).json({ message: "Такий товар не існує" });
    }
  }
}
