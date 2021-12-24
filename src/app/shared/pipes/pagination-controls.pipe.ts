import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginationControls'
})
export class PaginationControlsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
