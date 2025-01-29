import { Directive } from '@angular/core';

@Directive({
  selector: '[card-avatar-medium]',
  host: { class: 'card-avatar-medium' },
})
export class CardAvatarMediumDirective {}
