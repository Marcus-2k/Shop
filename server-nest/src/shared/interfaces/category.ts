import { Option } from "./option";

export interface Category {
  nameCategory: string;
  nameListCategory: (
    | {
        subNameCategory: string;
        navigate_link: string;

        characteristics: Option[];
        subNameListCategory?: undefined;
      }
    | {
        subNameCategory: string;
        navigate_link: string;

        characteristics?: undefined;
        subNameListCategory: {
          titleSubNameListCategory: string;
          navigate_link: string;

          characteristics: Option[];
        }[];
      }
  )[];
}
