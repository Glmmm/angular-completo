import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  foods = [
    { value: 1, viewValue: 'Banana' },
    { value: 2, viewValue: 'Maçã' },
    { value: 3, viewValue: 'Rogerio' },
  ];
}
