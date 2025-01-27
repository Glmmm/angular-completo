import { Pipe } from '@angular/core';

@Pipe({
  name: 'empty',
})
export class EmptyPipe {
  transform(value: any): any {
    const IS_EMPTY = value === null || value === undefined || value === '';
    if (IS_EMPTY) {
      return '-';
    }
    return value;
  }
}
