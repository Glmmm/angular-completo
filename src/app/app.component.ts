import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  btnColor = '#ccc';
  btnSize = '110px';
  verde = true;
  alterarValor(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    console.log(e);
    return (this.btnColor = `#${value}`);
  }
  styleModel = {
    width: '160px',
    backgroundColor: 'black',
    color: 'white',
  };

  atualizarStyle() {
    console.log(this.styleModel);
    this.styleModel = {
      width: '180px',
      backgroundColor: 'white',
      color: 'black',
    };
  }
}
