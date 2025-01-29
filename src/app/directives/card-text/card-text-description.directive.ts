import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'card-text-description',
  host: { class: 'card-text-description' },
})
export class CardTextDescriptionDirective {
  @Input()
  @HostBinding('style.color')
  color = '';
}
