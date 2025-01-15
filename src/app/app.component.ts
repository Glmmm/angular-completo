import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('input') inputEl!: ElementRef<HTMLInputElement>;
  @ViewChild('div') divEl!: ElementRef<HTMLDivElement>;

  public changeText() {
    this.inputEl.nativeElement.value = 'Atualizado';
  }
  public focus() {
    this.inputEl.nativeElement.focus();
  }
  public changeDiv() {
    this.divEl.nativeElement.textContent = 'Banana';
  }
}
