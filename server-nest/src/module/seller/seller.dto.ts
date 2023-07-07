import { IsNotEmpty, IsString, Validate } from "class-validator";
import { IsValidObjectIdValidator } from "src/shared/validator/is-valid-object-id-validator";

export class GetSellerByIdDto {
  @Validate(IsValidObjectIdValidator)
  @IsNotEmpty()
  @IsString()
  id: string;
}
