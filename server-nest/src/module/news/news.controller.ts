import { Controller, Get, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { Response } from "express";
import { NewsService } from "./news.service";
import { News } from "src/shared/interfaces/schemas/News";

@Controller("news")
/** Pipes */
@UsePipes(new ValidationPipe({ transform: true }))
export class NewsController {
  public constructor(private newsService: NewsService) {}

  @Get()
  public async getNews(
    @Res() response: Response<News[]>
  ): Promise<Response<News[]>> {
    const news: News[] = await this.newsService.find();

    return response.status(200).json(news);
  }
}
