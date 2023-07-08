import { Controller, Get, Res } from "@nestjs/common";
import { Response } from "express";

@Controller("checking")
export class CheckingController {
  @Get("status-server")
  async checkingStatusServer(
    @Res() response: Response<{ status: number }>
  ): Promise<Response<{ status: number }>> {
    return response.status(200).json({ status: 200 });
  }
}
