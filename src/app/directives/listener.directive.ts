import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { bindCallback } from 'rxjs';

@Directive({
  selector: '[appListener]',
})
export class ListenerDirective {
  @Input('bgColor') appListenerBackground: string = 'white';
  @Input('txtColor') appListenerColor: string = 'black';

  @HostBinding('style.backgroundColor') backgroundColor = this.appListenerBackground;
  @HostBinding('style.color') textColor = this.appListenerColor;

  @HostListener('blur') blurEvent() {
    this.backgroundColor = 'white';
    this.textColor = 'black';
  }
  @HostListener('focus', ['$event']) focusEvent() {
    this.backgroundColor = this.appListenerBackground;
    this.textColor = this.appListenerColor;
  }
}
