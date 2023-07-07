import { IsNotEmpty, IsString } from "class-validator";

export class GetCatalogSectionDto {
  @IsString()
  @IsNotEmpty()
  navigate_link: string;
}
