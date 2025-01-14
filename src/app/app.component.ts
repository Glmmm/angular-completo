import { Component, OnInit } from '@angular/core';
import { User } from './models/user/user.model';
import { UsersList } from './mocks/user.mock';
import { FilterOptions } from './models/filter/filter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  usersList: User[] = [];
  usersListFiltered: User[] = [];
  showUserDetails: boolean = false;
  userSelected: User = {} as User;

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 400);
  }

  public onUserSelectedHandler(user: User) {
    this.showUserDetails = true;
    return (this.userSelected = user);
  }

  public onFilterHandler(filterOptions: FilterOptions) {
    console.log(filterOptions);
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }
  
  filterUsersList(filterOptions: FilterOptions, usersList: User[]): User[] {
    let filteredList: User[] = [];

    filteredList = this.filteredListByName(filterOptions.name, usersList);

    return filteredList;
  }

  filteredListByName(name: string | undefined, usersList: User[]): User[] {
    const NAME_NOT_TYPPED = name === undefined;
    if (NAME_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
  }
}
