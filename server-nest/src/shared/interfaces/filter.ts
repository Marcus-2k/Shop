export interface Filter {
  title: string;
  query_name: string;
  show: boolean;
  checkboxList: Checkbox[];
}

export interface Checkbox {
  name: string;
  counter: number;
  active: boolean;
}
