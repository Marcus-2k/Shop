import { MatPaginatorIntl } from "@angular/material/paginator";

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = "Кількість продуктів:";
  customPaginatorIntl.nextPageLabel = "Наступна сторінка";
  customPaginatorIntl.previousPageLabel = "Попередня сторінка";

  return customPaginatorIntl;
}
