import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { News } from "src/shared/interfaces/schemas/News";

@Injectable()
export class NewsService {
  public constructor(
    @InjectModel("news") private readonly NewsModel: Model<News>
  ) {}

  public async find(): Promise<News[]> {
    return await this.NewsModel.find();
  }
}
