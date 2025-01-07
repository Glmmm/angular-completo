import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fontSize: number = 15;
  textColor: 'white' | 'orange' = 'white';
  buttonText: 'Branca' | 'Laranja' = 'Laranja';

  public increaseFontSize() {
    this.fontSize += 5;
  }

  public changeFontColor() {
    if (this.textColor === 'white') {
      this.textColor = 'orange';
      this.buttonText = 'Branca';
    } else {
      this.textColor = 'white';
      this.buttonText = 'Laranja';
    }
  }
}
