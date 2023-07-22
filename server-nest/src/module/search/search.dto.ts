import { Transform } from "class-transformer";
import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from "class-validator";
import { Pagination } from "src/shared/dto/pagination";
import { TypeSortNumber } from "src/shared/interfaces/type/sort/type-sort-number";

export class SearchByLinkDto {
  @IsString()
  navigate_link: string;
}

export class SearchQueryDto extends Pagination {
  @IsOptional()
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsInt()
  @IsIn([0, 1, 2, 3, 4, 5])
  type_sort: TypeSortNumber = 5;
}

export class SearchByTextDto extends SearchQueryDto {
  @IsString()
  @IsNotEmpty()
  search_text: string;
}
