import { NgModule } from '@angular/core';
import { CardTextTitleDirective } from './card-text/card-text-title.directive';
import { CardTextSubtitleDirective } from './card-text/card-text-subtitle.directive';
import { CardTextDescriptionDirective } from './card-text/card-text-description.directive';
import { CardAvatarSmallDirective } from './card-avatar/card-avatar-small.directive';
import { CardAvatarMediumDirective } from './card-avatar/card-avatar-medium.directive';
import { CardAvatarLargeDirective } from './card-avatar/card-avatar-large.directive';

@NgModule({
  declarations: [CardTextTitleDirective, CardTextSubtitleDirective, CardTextDescriptionDirective, CardAvatarSmallDirective, CardAvatarMediumDirective, CardAvatarLargeDirective],
  exports: [CardTextTitleDirective, CardTextSubtitleDirective, CardTextDescriptionDirective, CardAvatarSmallDirective, CardAvatarMediumDirective, CardAvatarLargeDirective],
})
export class CardTextModule {}
