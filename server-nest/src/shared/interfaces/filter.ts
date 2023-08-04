export interface Filter {
  title: string;
  query_title: string;
  show: boolean;
  checkboxList: Checkbox[];
}

export interface Checkbox {
  name: string;
  query_value: string;
  counter: number;
  active: boolean;
}
