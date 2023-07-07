import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { News } from "src/shared/interfaces/schemas/News";

@Injectable()
export class NewsService {
  constructor(@InjectModel("news") private readonly NewsModel: Model<News>) {}

  async find(): Promise<News[]> {
    return await this.NewsModel.find();
  }
}
