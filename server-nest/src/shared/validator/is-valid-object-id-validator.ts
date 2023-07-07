import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { isValidObjectId } from "mongoose";

@ValidatorConstraint({ name: "IsValidObjectIdValidator", async: false })
export class IsValidObjectIdValidator implements ValidatorConstraintInterface {
  validate(value: string, validationArguments: ValidationArguments): boolean {
    return isValidObjectId(value);
  }

  defaultMessage(validationArguments: ValidationArguments): string {
    return (
      "Приведення до ObjectId не знайдено значення: " +
      validationArguments.value
    );
  }
}
