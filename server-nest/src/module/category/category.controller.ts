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
import { CategoryService } from "./category.service";

@Controller("category")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
/** Guard */
@UseGuards(JwtAuthGuard)
export class CategoryController {
  constructor(private service: CategoryService) {}

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
    const data: Option[] | MessageRes =
      this.service.getCharacteristicsByCategory(body.category);

    if (Array.isArray(data)) {
      return response.status(404).json(data);
    } else {
      return response.status(404).json({ message: data.message });
    }
  }
}
