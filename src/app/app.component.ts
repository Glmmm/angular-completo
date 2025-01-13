import { Component } from '@angular/core';
import { User } from './models/user/user.model';
import { UsersList } from './mocks/user.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userSelected: User = UsersList[0];
}
