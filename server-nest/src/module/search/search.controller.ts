import { Controller, UsePipes, ValidationPipe } from "@nestjs/common";

@Controller("search")
/** Pipes */
@UsePipes(new ValidationPipe({ transform: true }))
export class SearchController {}
