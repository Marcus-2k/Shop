import { IsNotEmpty, IsString } from "class-validator";

export class GetCharacteristicsDto {
  @IsString()
  @IsNotEmpty()
  category: string;
}
