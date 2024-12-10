import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  texto = 'possui binding';
  tipo = 'password';
  desabilitado = false;

  alterarEstado() {
    return (this.desabilitado = !this.desabilitado);
  }
}
