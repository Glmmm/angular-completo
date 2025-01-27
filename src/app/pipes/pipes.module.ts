import { NgModule } from '@angular/core';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { EmptyPipe } from './empty.pipe';

@NgModule({
  declarations: [PhonePipe, AddressPipe, StatusPipe, EmptyPipe],
  exports: [PhonePipe, AddressPipe, StatusPipe, EmptyPipe],
})
export class PipesModule {}
