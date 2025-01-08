import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe',
})
export class StatusPipe implements PipeTransform {
  transform(status: number): string {
    console.log('pipe');
    const obj: { [a: number]: string } = {
      1: 'active',
      2: 'partial',
      3: 'blocked',
    };
    return obj[status];
  }
}
