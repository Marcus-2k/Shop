import { LanguageShort } from "./language/language";

export interface OptionObject {
  [key: string]: Option;
}

export type Option = {
  name: {
    [key in LanguageShort]: string;
  };
  query_title: string;

  html_element: "select";
  select: {
    name: {
      [key in LanguageShort]: string;
    };
    query_value: string;
  }[];

  multiple: boolean;
};
