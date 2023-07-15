import { IsDate, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name: string | undefined;

  @IsOptional()
  @IsString()
  lastName: string | undefined;

  @IsOptional()
  @IsDate()
  birthday: Date | undefined;

  @IsOptional()
  @IsString()
  country: string | undefined;
}

export class ChangePasswordUserDto {
  @IsString()
  oldPassword: string;

  @IsString()
  newPassword: string;
}
