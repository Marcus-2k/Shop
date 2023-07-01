export interface OptionObject {
  [key: string]: Option;
}

export interface Option {
  name: string;
  query_name: string;
  htmlElement: "select" | "input";
  select: string[];
  multiple: boolean;
}
