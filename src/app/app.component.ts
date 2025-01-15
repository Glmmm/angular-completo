import { Component, ElementRef, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('filho') filhoCompRef!: FilhoComponent;

  public alterarFilho() {
    this.filhoCompRef.message = 'Trocaram meu valor';
    this.filhoCompRef.chamarAlert();
  }
}
