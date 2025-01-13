import { Pipe } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe {
  transform(status: boolean): string {
    return status ? 'Ativo' : 'Desativado';
  }
}
