import { Component, EventEmitter, Output } from '@angular/core';
import { UsersList } from 'src/app/mocks/user.mock';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  @Output() userSelected = new EventEmitter<User>();
  usersList: User[] = UsersList;
  displayedColumns: any = ['nome', 'data-cadastro', 'status'];

  public onUserSelected(user: User) {
    return this.userSelected.emit(user);
  }
}
