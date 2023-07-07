import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/shared/interfaces/schemas/User";

@Injectable()
export class AccountUserService {
  constructor(@InjectModel("user") private readonly UserModel: Model<User>) {}

  async findById(id: string): Promise<User | null> {
    return this.UserModel.findById(id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.UserModel.findOne({ email });
  }

  async create(
    name: string,
    email: string,
    hashPassword: string
  ): Promise<User> {
    const user: User = await this.UserModel.create({
      avatar: null,
      name: name.split(/\s+/).join(""),
      lastName: null,
      email: email,
      birthday: null,
      country: null,
      password: hashPassword,
      history__view: [],
      favorite: [],
      shoppingCart: [],
    });

    return await user.save();
  }
}
