import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[dirDisabled]',
})
export class DisabledDirective {
  // @HostBinding('attr.disabled') attrDisabled = true;
  @HostBinding('disabled') propDisabled = true;
}
