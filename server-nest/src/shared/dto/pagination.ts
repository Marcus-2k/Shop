import { IsInt, Max, Min } from "class-validator";

export class Pagination {
  @IsInt()
  @Min(1)
  page: number = 1;

  @IsInt()
  @Min(10)
  @Max(100)
  limit: number = 10;
}
