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

@Controller("card")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
export class CardController {
  public constructor(private readonly productService: ProductService) {}

  @Get(":id")
  async getByIdCard(
    @Res() response: Response<Product | MessageRes>,
    @Param() param: IdDto
  ): Promise<Response<Product | MessageRes>> {
    const productInfo: Product | null = await this.productService.findById(
      param.id,
      {
        imageSrc: true,
        description: true,
      }
    );

    if (productInfo) {
      return response.status(200).json(productInfo);
    } else {
      return response.status(404).json({ message: "Такий товар не існує" });
    }
  }

  @Get(":id/info")
  async getByIdCardInfo(
    @Res() response: Response<Product | MessageRes>,
    @Param() param: IdDto
  ): Promise<Response<Product | MessageRes>> {
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

  @Get(":id/characteristics")
  async getByIdCardCharacteristics(
    @Res()
    response: Response<
      | {
          characteristics: number[][];
          characteristicsName: Option[];
        }
      | MessageRes
    >,
    @Param() param: IdDto
  ): Promise<
    Response<
      | {
          characteristics: number[][];
          characteristicsName: Option[];
        }
      | MessageRes
    >
  > {
    const product: Product | null = await this.productService.findById(
      param.id,
      {
        category: true,
        characteristics: true,
      }
    );

    if (product) {
      let characteristicsName: Option[] = [];

      if (product.category.length === 3) {
        characteristicsName =
          CATEGORY[product.category[0]].nameListCategory[product.category[1]]
            .subNameListCategory[product.category[2]].characteristics;
      } else if (product.category.length === 2) {
        characteristicsName =
          CATEGORY[product.category[0]].nameListCategory[product.category[1]]
            .characteristics;
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
  async getByIdCardComments(
    @Res() response: Response<Product | MessageRes>,
    @Param() param: IdDto
  ): Promise<Response<Product | MessageRes>> {
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
  async getByIdCardQuestions(
    @Res() response: Response<Product | MessageRes>,
    @Param() param: IdDto
  ): Promise<Response<Product | MessageRes>> {
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
  async getByIdCardPhoto(
    @Res() response: Response<Product | MessageRes>,
    @Param() param: IdDto
  ): Promise<Response<Product | MessageRes>> {
    const productPhoto: Product | null = await this.productService.findById(
      param.id,
      {
        imageSrc: true,
      }
    );

    if (productPhoto) {
      return response.status(200).json(productPhoto);
    } else {
      return response.status(404).json({ message: "Такий товар не існує" });
    }
  }

  @Get(":id/accessories")
  async getByIdCardAccessories(
    @Res() response: Response<Product | MessageRes>,
    @Param() param: IdDto
  ): Promise<Response<Product | MessageRes>> {
    const productAccessories: Product | null =
      await this.productService.findById(param.id, { accessories: true });

    if (productAccessories) {
      return response.status(200).json(productAccessories);
    } else {
      return response.status(404).json({ message: "Такий товар не існує" });
    }
  }
}
