import {
  Controller,
  Get,
  Res,
  Param,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { GetSellerByIdDto } from "./seller.dto";
import { SellerService } from "./seller.service";
import { User } from "src/shared/interfaces/schemas/User";
import { Response } from "express";

@Controller("seller")
/** Pipes */
@UsePipes(new ValidationPipe({ transform: true }))
export class SellerController {
  public constructor(private sellerService: SellerService) {}

  @Get(":id")
  public async getSellerById(
    @Res() response: Response<User>,
    @Param() param: GetSellerByIdDto
  ): Promise<Response<User>> {
    const seller: User = await this.sellerService.findById(param.id);

    return response.status(200).json(seller);
  }
}
