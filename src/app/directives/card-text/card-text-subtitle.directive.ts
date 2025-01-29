import { Directive } from '@angular/core';

@Directive({
  selector: 'card-text-subtitle, [card-text-subtitle]',
  host: { class: 'card-text-subtitle' },
})
export class CardTextSubtitleDirective {}
