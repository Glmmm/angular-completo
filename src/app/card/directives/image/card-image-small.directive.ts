import { Directive } from '@angular/core';

@Directive({
  selector: '[card-image-small]',
  host: { class: 'card-image-small' },
})
export class CardImageSmallDirective {}
