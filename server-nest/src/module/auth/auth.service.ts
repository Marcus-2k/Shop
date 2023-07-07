import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/shared/interfaces/schemas/User";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(@InjectModel("user") private readonly UserModel: Model<User>) {}

  private saltRounds: number = 10;

  public async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);

    return await bcrypt.hash(password, salt);
  }

  public async passwordCompare(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    const passwordValid: boolean = await bcrypt.compare(
      password,
      hashedPassword
    );

    return passwordValid;
  }
}
