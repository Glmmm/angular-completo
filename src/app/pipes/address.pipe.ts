import { Pipe } from '@angular/core';
import { Address } from '../models/user/address.model';

@Pipe({
  name: 'address',
})
export class AddressPipe {
  transform(endereço: Address): string {
    const INVALID_ADDRESS =
      !endereço ||
      !endereço.cidade ||
      !endereço.estado ||
      !endereço.numero ||
      !endereço.pais ||
      endereço.numero == null ||
      endereço.numero == undefined;
    if (INVALID_ADDRESS) {
      return 'Endereço Invalido ou Indiposnivel';
    }

    return `${endereço.rua}, ${endereço.numero}, ${endereço.cidade} - ${endereço.estado}`;
  }
}
