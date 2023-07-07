import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ name: "CategoryNumber", async: false })
export class CategoryNumberValidator implements ValidatorConstraintInterface {
  validate(value: number[], validationArguments: ValidationArguments): boolean {
    return false;
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return "";
  }
}
