import { Pipe, PipeTransform } from "@angular/core";
import { Data } from "@angular/router";

@Pipe({
  name: "findByText",
})
export class FindByTextPipe implements PipeTransform {
  transform(dataArray: any, search_text: string) {
    if (dataArray.length === 0 || search_text === "") {
      return dataArray;
    }

    const filterDataArray = dataArray.filter((item: any) => {
      return (
        item.Description.toLowerCase().indexOf(search_text.toLowerCase(), 0) !==
        -1
      );
    });

    console.log(filterDataArray);
    return filterDataArray;
  }
}
