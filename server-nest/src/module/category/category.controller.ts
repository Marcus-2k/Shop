import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";
import { CATEGORY } from "src/shared/db/category";
import { Category } from "src/shared/interfaces/category";

@Controller("category")
export class CategoryController {
  @Get() async getCategory(
    @Res() response: Response
  ): Promise<Response<Category[]>> {
    return response.status(200).json(CATEGORY);
  }
}
