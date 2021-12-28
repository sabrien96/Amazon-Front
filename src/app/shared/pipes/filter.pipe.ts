import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: [], filterString: any, propName: any): any[] {
    const resultArray = [];
    if (value.length === 0 || filterString === null || propName === '') {
      return value;
    }

    for (const item in value) {
      if (item[propName] === filterString) {
        console.log("filter: ", resultArray);
        resultArray.push(item);
      }
    }
    console.log(`${resultArray} ,  ${filterString}  ,  ${propName}`);

    return resultArray;
  }
}


