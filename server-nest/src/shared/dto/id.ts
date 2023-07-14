import { Validate } from "class-validator";
import { IsValidObjectIdValidator } from "../validator/is-valid-object-id-validator";

export class IdDto {
  @Validate(IsValidObjectIdValidator)
  id: string;
}
