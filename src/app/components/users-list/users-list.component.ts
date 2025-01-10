import { Component } from '@angular/core';
import { UsersList } from 'src/app/mocks/user.mock';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  usersList: any = UsersList;
  displayedColumns: any = ['nome', 'data-cadastro', 'status'];

  public onUserSelected(user: User) {
    console.log(user);
  }
}
