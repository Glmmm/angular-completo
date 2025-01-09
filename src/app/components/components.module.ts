import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [UserDetailsComponent, FilterComponent],

  imports: [MaterialModule, FormsModule, CommonModule],
  exports: [MaterialModule, UserDetailsComponent, FilterComponent],
})
export class ComponentsModule {}
