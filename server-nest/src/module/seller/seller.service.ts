import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/shared/interfaces/schemas/User";

@Injectable()
export class SellerService {
  public constructor(
    @InjectModel("user") private readonly SellerModel: Model<User>
  ) {}

  public async findById(id: string): Promise<User> {
    return await this.SellerModel.findById(id, {
      avatar: true,
      name: true,
    });
  }
}
