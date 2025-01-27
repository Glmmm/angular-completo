import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
})
export class XssComponent {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

// VULNERAVEL A ATAQUE XSS 
//  public createElement(inputText: string) {
//     const divEl = document.createElement('div');

//     divEl.innerHTML = inputText;

//     this.elRef.nativeElement.appendChild(divEl);
//   }

  public createElementRenderer(inputText: string) {
    const divEl = this.renderer.createElement('div');
    const text = this.renderer.createText(inputText);

    this.renderer.appendChild(divEl, text);
    this.renderer.appendChild(this.elRef.nativeElement, divEl);
  }
}
