export interface Widget_Breadcrumbs {
  first: { name: string; link: string };
  second: { name: string; link: string };
  third: { name: string; link: string } | undefined;
  location: { name: string } | undefined;
}

export interface ProductCard {
  imageSrc: string[];
  name: string;
  price: number;
  action: boolean;
  actionPrice: number;
  counter: number;
  status: 0 | 1 | 2 | 3;
  description: string;
  user: string;
  _id: string;
}

export interface Card {
  widget_breadcrumbs: Widget_Breadcrumbs;
  product: ProductCard;
}
