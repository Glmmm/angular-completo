import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('input') inputEl!: ElementRef<HTMLInputElement>;
  // @ViewChild('input', { static: true } ) inputEl!: ElementRef<HTMLInputElement>; ESTATICO = NÃO POSSUI LOGICA ANTERIOR A SUA RENDERIZAÇÃO, OU ALGO ASSIM

  constructor() {
    console.log('constructor');
  }
  ngOnInit(): void {
    console.log('onInit');
  }
  ngAfterViewInit(): void {
    console.log('afterViewInit');
    this.inputEl.nativeElement.focus();
  }
}
