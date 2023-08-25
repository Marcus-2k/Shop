import { Transform } from "class-transformer";
import {
  IsNumber,
  IsString,
  Min,
  Max,
  MinLength,
  MaxLength,
  IsBoolean,
  IsOptional,
  Validate,
  IsNotEmpty,
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
    if (value === "null") {
      return null;
    } else {
      return Number(value) > 0 ? Number(value) : null;
    }
  })
  discountPrice: number | null;

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

  @IsString()
  @IsNotEmpty()
  category: string;

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
  @Transform(({ value }: { value: string }) => {
    return value.split("?");
  })
  @IsString({ each: true })
  imageSrc?: string[];

  @IsOptional()
  @IsString()
  @MinLength(12)
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @Min(0)
  @Max(10000000)
  price?: number;

  @IsOptional()
  @Transform(({ value }) => {
    if (value === "null") {
      return null;
    } else {
      return Number(value) > 0 ? Number(value) : null;
    }
  })
  discountPrice?: number | null;

  @IsOptional()
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  @Min(0)
  counter?: number;

  @IsOptional()
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsNumber()
  status?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  category: string | undefined;

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
  keywords?: string[];

  @IsOptional()
  @IsString()
  @MinLength(60)
  @MaxLength(5000)
  description?: string;
}
