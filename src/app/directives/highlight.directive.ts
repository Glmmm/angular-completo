import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  @HostBinding('style.background-color') bgColor = 'transparent';

  @HostListener('mouseover') mouseOver() {
    this.bgColor = 'orange';
  }
  @HostListener('mouseout') mouseOut() {
    this.bgColor = 'transparent';
  }
}
