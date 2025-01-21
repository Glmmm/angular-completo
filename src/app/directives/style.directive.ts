import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[dirStyle]',
})
export class StyleDirective {
  // @HostBinding('attr.style') attrStyle = 'background-color: orange; color: white;';
  // @HostBinding('style') propStyle = 'background-color: orange; color: white;';
  // @HostBinding('style') propStyleObj = { backgroundColor: 'orange', color: 'white' };
  @HostBinding('style.backgroundColor') bgColor = 'green';
  @HostBinding('style.color') color = 'white';
}
