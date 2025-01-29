import { Directive } from '@angular/core';

@Directive({
  selector: '[card-avatar-large]',
  host: { class: 'card-avatar-large' },
})
export class CardAvatarLargeDirective {}
