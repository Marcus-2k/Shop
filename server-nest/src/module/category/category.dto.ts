import { IsArray, Validate } from "class-validator";
import { CategoryNumberValidator } from "src/shared/validator/category-number.validator";

export class GetCharacteristicsDto {
  @IsArray()
  @Validate(CategoryNumberValidator)
  categoryNumber: number[];
}
