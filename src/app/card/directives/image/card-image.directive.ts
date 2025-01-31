import { Directive } from '@angular/core';

@Directive({
  selector: '[card-image]',
  host: { class: 'card-image' },
})
export class CardImageDirective {}
