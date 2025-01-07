import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedPerson: number | undefined;
  lista = [
    { nome: 'Rogerio Rei', idade: 34 },
    { nome: 'Gustavo Ramos', idade: 56 },
    { nome: 'Pedro Alvares', idade: 23 },
    { nome: 'Alan Tuning', idade: 43 },
  ];
  public selectPerson(i: number) {
    console.log(i);

    this.selectedPerson = i;
  }
}
