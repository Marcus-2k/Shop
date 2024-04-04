import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import * as bcrypt from "bcrypt";
import { Model } from "mongoose";
import { User } from "../../shared/interfaces/schemas/User";

@Injectable()
export class AuthService {
  public constructor(@InjectModel("user") private UserModel: Model<User>) {}

  private saltRounds: number = 10;

  public async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);

    return await bcrypt.hash(password, salt);
  }

  public async passwordCompare(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    const passwordValid: boolean = await bcrypt.compare(
      password,
      hashedPassword,
    );

    return passwordValid;
  }
}
