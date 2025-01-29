import { Directive } from '@angular/core';

@Directive({
  selector: 'card-text-title, [card-text-title]',
  host: { class: 'card-text-title' },
})
export class CardTextTitleDirective {}
