import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showContent = true;

  pessoa = {
    status: 1,
    name: undefined,
  };

  changeShowContent() {
    this.showContent = !this.showContent
  }
}
