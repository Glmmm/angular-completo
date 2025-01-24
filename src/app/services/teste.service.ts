import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TesteService {

  public create(elRef: ElementRef) {
    const newDiv = document.createElement('div');

    newDiv.textContent = 'Me criarão';
    newDiv.classList.add('bg-red');

    elRef.nativeElement.appendChild(newDiv);
  }
}
