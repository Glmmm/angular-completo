import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[dirClass]'
})
export class ClassDirective {

  @HostBinding("className") className = 'texto'

}
