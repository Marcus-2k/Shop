import { Transform } from "class-transformer";
import { IsInt, Max, Min } from "class-validator";

export class Pagination {
  @Transform(({ value }) => {
    return Number(value);
  })
  @IsInt()
  @Min(1)
  page: number = 1;

  @Transform(({ value }) => {
    return Number(value);
  })
  @IsInt()
  @Min(10)
  @Max(100)
  limit: number = 10;
}
