import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [UserDetailsComponent, FilterComponent, UsersListComponent],

  imports: [MaterialModule, FormsModule, CommonModule],
  exports: [
    MaterialModule,
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
  ],
})
export class ComponentsModule {}
