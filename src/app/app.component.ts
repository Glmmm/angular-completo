import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isGreen: boolean = false;

  public setGreen() {
    this.isGreen = true
  }
  
  public setOrange() {
    this.isGreen = false
  }
}
