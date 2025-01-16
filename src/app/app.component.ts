import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('btn') buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

  buttonsList = ['Botao', 'Botao', 'Botao'];

  ngAfterViewInit(): void {
    console.log(this.buttonsEl);
    
    this.buttonsEl.changes.subscribe((a) => {
      console.log(a);
    });
  }
  public changeColor(e: Event) {
    const btn = e.target as HTMLButtonElement;

    btn.style.backgroundColor = 'orange';
    btn.style.color = '#fff';
  }
  public resetButtons() {
    this.buttonsEl.forEach((btnEl) => {
      console.log(btnEl);
      btnEl.nativeElement.style.backgroundColor = '';
      btnEl.nativeElement.style.color = 'black';
    });
  }
  public alterarPrimeiro() {
    // ALGUMAS FORMAS DE ACESSAR E ALTERAR UM ELEMENTO HTML UTILIZANDO VIEWCHILDREN
    // const first = this.buttonsEl.find((btnEl) => btnEl.nativeElement.className === 'btn-0');
    // const first = this.buttonsEl.toArray()[0];
    const first = this.buttonsEl.get(0);
    this;

    first!.nativeElement.style.backgroundColor = 'red';
  }
  public remove() {
    this.buttonsList.shift();
  }
}
