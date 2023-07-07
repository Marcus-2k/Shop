import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";
import { NewsService } from "./news.service";
import { News } from "src/shared/interfaces/schemas/News";

@Controller("news")
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Get() async getNews(
    @Res() response: Response<News[]>
  ): Promise<Response<News[]>> {
    const news: News[] = await this.newsService.find();

    return response.status(200).json(news);
  }
}
