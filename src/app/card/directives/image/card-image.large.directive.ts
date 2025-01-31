import { Directive } from '@angular/core';

@Directive({
  selector: '[card-image-large]',
  host: { class: 'card-image-large' },
})
export class CardImageLargeDirective {}
