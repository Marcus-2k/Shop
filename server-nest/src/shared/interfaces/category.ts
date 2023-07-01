import { Option } from "./option";

export interface Category {
  nameCategory: string;
  nameListCategory: (
    | {
        subNameCategory: string;
        permissionUse: boolean;

        characteristics: Option[];
        // subNameListCategory: undefined;
      }
    | {
        subNameCategory: string;
        permissionUse: boolean;

        // characteristics: undefined;
        subNameListCategory: {
          titleSubNameListCategory: string;
          characteristics: Option[];
          permissionUse: boolean;
        }[];
      }
  )[];
}
