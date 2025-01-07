import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Guilherme';

  // public changeName(e: string) {
  //   console.log(e);
  //   this.name = e;
  // }
}
