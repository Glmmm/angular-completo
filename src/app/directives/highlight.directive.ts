import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[dirHighlight]',
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
