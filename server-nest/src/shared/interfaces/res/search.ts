import {
  CatalogNameListCategory,
  CatalogSubNameListCategory,
} from "../catalog";
import { Filter } from "../filter";
import { Product } from "../schemas/Product";
import { Breadcrumbs } from "../widget/breadcrumbs";

export type SearchRes = {
  product: Product[];
  filters: Filter[];

  widget_breadcrumbs: Breadcrumbs | undefined;

  number_of_product: number;
  currentPage: number;
  maxPage: number;
  limit: number;
} & (
  | {
      widget_section_id: CatalogNameListCategory[];
    }
  | {
      widget_auto_portal: CatalogSubNameListCategory[];
    }
);
