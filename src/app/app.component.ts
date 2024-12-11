import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  texto = 'possui binding';
  tipo = 'text';
  desabilitado = false;

  alterarEstado() {
    return (this.desabilitado = !this.desabilitado);
  }
  alterarTipoInput() {
    this.tipo == 'password' ? (this.tipo = 'text') : (this.tipo = 'password');
  }
  alterarValorInput(event: Event) {
    const currentValue = (event.target as HTMLInputElement).value;
    console.log(currentValue);
  }
}
