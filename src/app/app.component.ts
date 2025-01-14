import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  clicked(input: HTMLInputElement) {
    console.log(input.value);
    input.value = 'Atualizado';
  }
}

const pai = () => {
  let pai = 'pai'; 
  const filha = () => {
    let filha = 'filha';
    pai = 'teste';
    //ASSIM POR DIANTE
  };
};
