import { Directive } from '@angular/core';

@Directive({
  selector: '[card-avatar-small]',
  host: { class: 'card-avatar-small' },
})
export class CardAvatarSmallDirective {}
