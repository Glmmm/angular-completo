import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  constructor(private readonly elRef: ElementRef) {}

  @ViewChild('div') divEl!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    const divEl = this.elRef.nativeElement.querySelector('#outra-div') as HTMLDivElement;

    divEl.textContent = 'Outra Div';
    divEl.style.backgroundColor = 'blue';
    divEl.style.color = 'white';

    divEl.addEventListener('click', () => {
      console.log('Div clicada');
    });
    console.log(this.elRef);
  }
  ngAfterViewInit(): void {
    this.divEl.nativeElement.style.backgroundColor = 'white';
    this.divEl.nativeElement.textContent = 'Div';
    this.divEl.nativeElement.classList.add('classe');
  }
  public addElement() {
    const newDiv = document.createElement('div');

    newDiv.textContent = 'Nova Div';
    newDiv.classList.add('classe');

    this.elRef.nativeElement.appendChild(newDiv);
  }
}
