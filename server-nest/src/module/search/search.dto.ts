import { Transform } from "class-transformer";
import { IsIn, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Pagination } from "src/shared/dto/pagination";
import { TypeSortNumber } from "src/shared/interfaces/type/sort/type-sort-number";

export class ParamDto {
  @IsOptional()
  @IsString()
  navigate_link: string | undefined = undefined;
}

export class QueryDto extends Pagination {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  search_text: string | undefined = undefined;

  @IsOptional()
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsInt()
  @IsIn([0, 1, 2, 3, 4, 5])
  type_sort: TypeSortNumber = 5;
}
