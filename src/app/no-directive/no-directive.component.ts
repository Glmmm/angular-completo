import { Component } from '@angular/core';

@Component({
  selector: 'app-no-directive',
  templateUrl: './no-directive.component.html',
  styleUrls: ['./no-directive.component.scss'],
})
export class NoDirectiveComponent {
  addBgColor: boolean = false;

  public mouseOver() {
    this.addBgColor = true;
  }
  public mouseOut() {
    this.addBgColor = false;
  }
}
