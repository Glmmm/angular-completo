import { Directive } from '@angular/core';

@Directive({
  selector: '[card-description-text]',
  host: { class: 'card-description-text' },
})
export class CardDescriptionTextDirective {}
