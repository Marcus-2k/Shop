import { Transform } from "class-transformer";
import {
  IsNumber,
  IsString,
  Min,
  Max,
  MinLength,
  MaxLength,
  IsBoolean,
  IsInt,
  ArrayMaxSize,
  ArrayMinSize,
  IsOptional,
  Validate,
} from "class-validator";

import { CharacteristicsValidator } from "src/shared/validator/characteristics.validator";

export class CreateProductDto {
  @IsString()
  @MinLength(12)
  @MaxLength(50)
  name: string;

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @Min(0)
  @Max(10000000)
  price: number;

  @Transform(({ value }) => {
    if (value === "1") {
      return true;
    } else {
      return false;
    }
  })
  @IsBoolean()
  action: boolean;

  @Transform(({ value }) => {
    return Number(value);
  })
  actionPrice: number;

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @Min(0)
  counter: number;

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  status: number;

  @Transform(({ value }) => {
    return value.split(" ").map((value: string) => {
      return Number(value);
    });
  })
  @ArrayMinSize(2)
  @ArrayMaxSize(3)
  @IsInt({ each: true })
  category: [number, number] | [number, number, number];

  @Validate(CharacteristicsValidator)
  characteristics: string;

  @IsOptional()
  @Transform(({ value }) => {
    return value.split(" ");
  })
  @IsString({ each: true })
  @MinLength(2, { each: true })
  @MaxLength(10, { each: true })
  keywords: string[] | undefined;

  @IsString()
  @MinLength(60)
  @MaxLength(5000)
  description: string;
}

export class UpdateProduct {
  @IsOptional()
  @IsString()
  @MinLength(12)
  @MaxLength(50)
  name: string | undefined;

  @IsOptional()
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @Min(0)
  @Max(10000000)
  price: number | undefined;

  @IsOptional()
  @Transform(({ value }) => {
    if (value === "1") {
      return true;
    } else {
      return false;
    }
  })
  @IsBoolean()
  action: boolean | undefined;

  @IsOptional()
  @Transform(({ value }) => {
    return Number(value);
  })
  actionPrice: number | undefined;

  @IsOptional()
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @Min(0)
  counter: number | undefined;

  @IsOptional()
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  status: number | undefined;

  @IsOptional()
  @Transform(({ value }) => {
    return value.split(" ").map((value: string) => {
      return Number(value);
    });
  })
  @ArrayMinSize(2)
  @ArrayMaxSize(3)
  @IsInt({ each: true })
  category: [number, number] | [number, number, number] | undefined;

  @IsOptional()
  @Validate(CharacteristicsValidator)
  characteristics: string | undefined;

  @IsOptional()
  @Transform(({ value }) => {
    return value.split(" ");
  })
  @IsString({ each: true })
  @MinLength(2, { each: true })
  @MaxLength(10, { each: true })
  keywords: string[] | undefined;

  @IsOptional()
  @IsString()
  @MinLength(60)
  @MaxLength(5000)
  description: string | undefined;
}
