import { Directive } from '@angular/core';

@Directive({
  selector: '[card-sub-text]',
  host: { class: 'card-sub-text' },
})
export class CardSubTextDirective {}
