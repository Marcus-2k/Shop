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
    for (let index = 0; index < CATEGORY.length; index++) {
      for (let idx = 0; idx < CATEGORY[index].nameListCategory.length; idx++) {
        if (CATEGORY[index].nameListCategory[idx].characteristics) {
          if (
            CATEGORY[index].nameListCategory[idx].navigate_link ===
              body.category &&
            CATEGORY[index].nameListCategory[idx].characteristics
          ) {
            return response
              .status(200)
              .json(CATEGORY[index].nameListCategory[idx].characteristics);
          }
        } else {
          for (
            let i = 0;
            i <
            CATEGORY[index].nameListCategory[idx].subNameListCategory.length;
            i++
          ) {
            if (
              CATEGORY[index].nameListCategory[idx].subNameListCategory[i]
                .navigate_link === body.category
            ) {
              return response
                .status(200)
                .json(
                  CATEGORY[index].nameListCategory[idx].subNameListCategory[i]
                    .characteristics
                );
            }
          }
        }
      }
    }

    return response.status(404).json({ message: "Розділ каталогу не існує" });
  }
}
