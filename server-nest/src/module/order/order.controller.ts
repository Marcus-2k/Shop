import {
  Controller,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { JwtAuthGuard } from "src/shared/guards/jwt.guard";

@Controller("order")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
/** Guard */
@UseGuards(JwtAuthGuard)
export class OrderController {}
