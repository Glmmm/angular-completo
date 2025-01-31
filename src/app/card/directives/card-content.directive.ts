import { Directive } from '@angular/core';

@Directive({
  selector: 'card-content',
  host: { class: 'card-content' },
})
export class CardContentDirective {}
