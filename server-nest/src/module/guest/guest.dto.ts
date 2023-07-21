import { Transform } from "class-transformer";
import { Validate } from "class-validator";
import { IsValidObjectIdValidator } from "src/shared/validator/is-valid-object-id-validator";

export class GetHistoryGuestDto {
  @Transform(({ value }) => {
    return value.split(",");
  })
  @Validate(IsValidObjectIdValidator, { each: true })
  history_view: string[];
}

export class GetGuestCartDto {
  @Transform(({ value }) => {
    return value.split(",");
  })
  @Validate(IsValidObjectIdValidator, { each: true })
  carts_id: string[];
}
