import { Component } from '@angular/core';
import { User } from './models/user/user.model';
import { UsersList } from './mocks/user.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showUserDetails: boolean = false;
  userSelected: User = {} as User;

  public userSelectedHandler(user: User) {
    this.showUserDetails = true;
    return (this.userSelected = user);
  }
}
