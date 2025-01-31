import { Directive } from '@angular/core';

@Directive({
  selector: 'card-header',
  host: { class: 'card-header',},
})
export class CardHeaderDirective {}
