import { NgModule } from '@angular/core';
import { CardTextTitleDirective } from './card-text-title.directive';
import { CardTextSubtitleDirective } from './card-text-subtitle.directive';
import { CardTextDescriptionDirective } from './card-text-description.directive';

@NgModule({
  declarations: [CardTextTitleDirective, CardTextSubtitleDirective, CardTextDescriptionDirective],
  exports: [CardTextTitleDirective, CardTextSubtitleDirective, CardTextDescriptionDirective],
})
export class CardTextModule {}
