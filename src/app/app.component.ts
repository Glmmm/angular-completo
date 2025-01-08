import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pessoa1 = { name: 'Rogerio', status: 1 };
  pessoa2 = { name: 'Rogerio', status: 2 };
  pessoa3 = { name: 'Rogerio', status: 3 };
}
