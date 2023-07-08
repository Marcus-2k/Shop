import { Controller, UsePipes, ValidationPipe } from "@nestjs/common";

@Controller("card")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
export class CardController {}
