import { Component, EventEmitter, Output } from '@angular/core';
import { FilterOptions } from 'src/app/models/filter/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output('onFilter') onFilterEmit = new EventEmitter<FilterOptions>();

  filterOptions: FilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  statusOptions = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false },
  ];

  public onFilter() {
    this.onFilterEmit.emit(this.filterOptions);
  }
}
