import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocusSecond]',
})
export class FocusSecondDirective implements AfterViewInit {
  constructor(private readonly elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const elList = this.elRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];
    if (elList.length > 1) {
      elList[1].focus();
    }
  }
}
