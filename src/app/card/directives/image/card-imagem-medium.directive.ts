import { Directive } from '@angular/core';

@Directive({
  selector: '[card-image-medium]',
  host: { class: 'card-image-medium' },
})
export class CardImageMediumDirective {}
