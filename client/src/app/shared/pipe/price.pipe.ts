import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: string | number): any {
    return value.toLocaleString('ru-RU');
  }
}
