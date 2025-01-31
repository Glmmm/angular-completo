import { NgModule } from '@angular/core';
import { CardHeaderDirective } from './card-header.directive';
import { CardContentDirective } from './card-content.directive';

@NgModule({
  declarations: [CardHeaderDirective, CardContentDirective],
  exports: [CardHeaderDirective, CardContentDirective],
})
export class CardModule {}
