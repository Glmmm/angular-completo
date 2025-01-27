import { Injectable } from '@angular/core';
import { isWithinInterval } from 'date-fns';
import { User } from 'src/app/models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class FilterUsersUtils {
  public filteredListByName(name: string | undefined, usersList: User[]): User[] {
    const NAME_NOT_TYPPED = name === undefined;
    if (NAME_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return filteredList;
  }

  public filteredListByStatus(status: boolean | undefined, usersList: User[]): User[] {
    const STATUS_NOT_TYPPED = status === undefined;
    if (STATUS_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo === status);
    return filteredList;
  }

  public filteredListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: User[]): User[] {
    const DATE_NOT_TYPPED = startDate === undefined || endDate === undefined;
    if (DATE_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => isWithinInterval(user.dataCadastro, { start: startDate, end: endDate }));
    return filteredList;
  }
}
