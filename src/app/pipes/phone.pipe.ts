import { ContentObserver } from '@angular/cdk/observers';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(phone: string): string {
    const pattern = new RegExp(/^\d{10,11}$/g);
    const INVALID_PHONE = pattern.test(phone);

    if (!INVALID_PHONE) {
      return 'Telefone Invalido ou Indisponivel';
    }

    const VALID_PHONE = phone.length === 11;
    if (VALID_PHONE) {
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
    } else {
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
    }
  }
}
