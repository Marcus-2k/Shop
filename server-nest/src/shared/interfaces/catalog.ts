export interface Catalog {
  nameCategory: string;
  nameCategoryImg: string;
  navigate_link: string;
  nameListCategory: CatalogNameListCategory[];
}

export type CatalogNameListCategory =
  | {
      subNameCategory: string;
      navigate_link: string;
      type: 1;
      image_link: string;
      permissionUse: boolean;
      subNameListCategory: CatalogSubNameListCategory[];
    }
  | {
      subNameCategory: string;
      navigate_link: string;
      type: 1;
      image_link: string;
      permissionUse: boolean;
      subNameListCategory?: undefined;
    }
  | {
      subNameCategory: string;
      navigate_link: string;
      type: 2;
      image_link: string;
      permissionUse: boolean;
      subNameListCategory: CatalogSubNameListCategory[];
    };

export type CatalogSubNameListCategory =
  | {
      titleSubNameListCategory: string;
      navigate_link: string;
      navigate_image: string;
      type: 1;
      permissionUse: boolean;
    }
  | {
      titleSubNameListCategory: string;
      navigate_link: string;
      queryParams: { [key: string]: string };
      permissionUse: boolean;
    };
