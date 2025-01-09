import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [MaterialModule],
  exports: [MaterialModule, UserDetailsComponent],
})
export class ComponentsModule {}
