import { Component, OnInit } from '@angular/core';
import { User } from './models/user/user.model';
import { UsersList } from './mocks/user.mock';
import { FilterOptions } from './models/filter/filter.model';
import { FilterUsersUtils } from './utils/filter/filter-users.utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private filterUtils: FilterUsersUtils){};

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

  public filterUsersList(filterOptions: FilterOptions, usersList: User[]): User[] {
    let filteredList: User[] = [];

    filteredList = this.filterUtils.filteredListByName(filterOptions.name, usersList);
    filteredList = this.filterUtils.filteredListByStatus(filterOptions.status, filteredList);
    filteredList = this.filterUtils.filteredListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }
}
