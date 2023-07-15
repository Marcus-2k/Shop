import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { unlink } from "fs";
import { Model } from "mongoose";
import { User } from "src/shared/interfaces/schemas/User";
import { UpdateUser } from "src/shared/interfaces/user-update";
import * as bcrypt from "bcrypt";

@Injectable()
export class AccountUserService {
  public constructor(
    @InjectModel("user") private readonly UserModel: Model<User>
  ) {}

  public async findById(id: string): Promise<User | null> {
    return this.UserModel.findById(id, { password: false });
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.UserModel.findOne({ email });
  }

  public async create(
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

  public checkPasswordValid(
    current_password_write: string,
    current_password_db: string
  ): boolean {
    return bcrypt.compareSync(current_password_write, current_password_db);
  }

  public newPasswordHash(new_password: string): string {
    const salt: string = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(new_password, salt);
  }

  public async updateUserById(id: string, data: UpdateUser): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );
  }

  public async changePasswordById(
    id: string,
    passwordHash: string
  ): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(
      id,
      { $set: { password: passwordHash } },
      { new: true }
    );
  }

  public async addHistoryView(id: string, id_product: string): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(id, {
      $push: { history__view: id_product },
    });
  }

  public async removeHistoryView(
    id: string,
    id_product: string
  ): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(id, {
      $pull: { history__view: id_product },
    });
  }

  public async addFavorite(id: string, id_product: string): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(
      id,
      { $push: { favorite: id_product } },
      { new: true }
    );
  }

  public async removeFavorite(id: string, id_product: string): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(
      id,
      { $pull: { favorite: id_product } },
      { new: true }
    );
  }

  public async addCart(id: string, id_product: string): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(
      id,
      { $push: { shoppingCart: id_product } },
      { new: true }
    );
  }

  public async removeCart(id: string, id_product: string): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(
      id,
      { $pull: { shoppingCart: id_product } },
      { new: true }
    );
  }

  public deleteImgFromFolder(url: string) {
    unlink(url, (err: NodeJS.ErrnoException) => {});
  }
}
