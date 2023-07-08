import { Controller, UsePipes, ValidationPipe } from "@nestjs/common";

@Controller("guest")
/** Pipe */
@UsePipes(new ValidationPipe({ transform: true }))
export class GuestController {}
