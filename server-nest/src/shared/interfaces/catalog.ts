export interface Catalog {
  nameCategory: string;
  nameCategoryImg: string;
  navigate_link: string;
  nameListCategory: (
    | {
        subNameCategory: string;
        navigate_link: string;
        type: 1;
        image_link: string;
        permissionUse: boolean;
        subNameListCategory: {
          titleSubNameListCategory: string;
          navigate_link: string;
          queryParams: { [key: string]: string };
          permissionUse: boolean;
        }[];
      }
    | {
        subNameCategory: string;
        navigate_link: string;
        type: 1;
        image_link: string;
        permissionUse: boolean;
      }
    | {
        subNameCategory: string;
        navigate_link: string;
        type: 2;
        image_link: string;
        permissionUse: boolean;
        subNameListCategory: {
          titleSubNameListCategory: string;
          navigate_link: string;
          navigate_image: string;
          type: 1;
          permissionUse: boolean;
        }[];
      }
  )[];
}
