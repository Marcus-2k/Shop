import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ name: "CharacteristicsValidator", async: false })
export class CharacteristicsValidator implements ValidatorConstraintInterface {
  validate(value: string, validationArguments: ValidationArguments): boolean {
    return new RegExp(/^(\d+(,\d+)*(-\d+(,\d+)*)*,?)+$/).test(value);
  }

  defaultMessage(validationArguments: ValidationArguments): string {
    return "Характеристики передано в неправильному форматі. Приклад (14-33-1-7-0-10-1-0-8-0 | 14,2,3-33,0-1-7)";
  }
}
