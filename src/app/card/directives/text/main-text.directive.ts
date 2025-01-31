import { Directive } from '@angular/core';

@Directive({
  selector: '[card-main-text]',
  host: { class: 'card-main-text' },
})
export class CardMainTextDirective {}
