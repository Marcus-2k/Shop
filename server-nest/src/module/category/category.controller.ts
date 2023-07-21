import {
  Controller,
  Get,
  Post,
  Res,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from "@nestjs/common";
import { Response } from "express";
import { CATEGORY } from "src/shared/db/category";
import { Category } from "src/shared/interfaces/category";
import { GetCharacteristicsDto } from "./category.dto";
import { Option } from "src/shared/interfaces/option";
import { MessageRes } from "src/shared/interfaces/res/message";
import { JwtAuthGuard } from "src/shared/guards/jwt.guard";

@Controller("category")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
/** Guard */
@UseGuards(JwtAuthGuard)
export class CategoryController {
  constructor() {}

  @Get()
  public async getCategory(
    @Res() response: Response
  ): Promise<Response<Category[]>> {
    return response.status(200).json(CATEGORY);
  }

  @Post("characteristics")
  public async getCharacteristics(
    @Res() response: Response<Option[] | MessageRes>,
    @Body() body: GetCharacteristicsDto
  ): Promise<Response<Option[] | MessageRes>> {
    let characteristics: Option[] = [];

    if (
      body.categoryNumber.length === 3 &&
      CATEGORY[body.categoryNumber[0]].nameListCategory[body.categoryNumber[1]]
    ) {
      characteristics =
        CATEGORY[body.categoryNumber[0]].nameListCategory[
          body.categoryNumber[1]
        ].subNameListCategory[body.categoryNumber[2]].characteristics;
    } else if (body.categoryNumber.length === 2) {
      characteristics =
        CATEGORY[body.categoryNumber[0]].nameListCategory[
          body.categoryNumber[1]
        ].characteristics;
    } else {
      return response.status(404).json({ message: "Розділ каталогу не існує" });
    }

    return response.status(200).json(characteristics);
  }
}
