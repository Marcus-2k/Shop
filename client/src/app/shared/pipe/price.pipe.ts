import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "price",
})
export class PricePipe implements PipeTransform {
  transform(value: string | number | undefined): string | number {
    if (value) {
      return value.toLocaleString("ru-RU");
    } else {
      return "11:4 price.pipe.ts";
    }
  }
}
