import {
  Controller,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { JwtAuthGuard } from "src/shared/guards/jwt.guard";

@Controller("account-user")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
/** Guard */
@UseGuards(JwtAuthGuard)
export class AccountUserController {}
