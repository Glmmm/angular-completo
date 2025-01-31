import { NgModule } from '@angular/core';
import { CardHeaderDirective } from './base/card-header.directive';
import { CardContentDirective } from './base/card-content.directive';
import { CardMainTextDirective } from './text/main-text.directive';
import { CardSubTextDirective } from './text/sub-text.directive';
import { CardDescriptionTextDirective } from './text/description-text.directive';
import { CardImageDirective } from './image/card-image.directive';
import { CardImageSmallDirective } from './image/card-image-small.directive';
import { CardImageMediumDirective } from './image/card-imagem-medium.directive';
import { CardImageLargeDirective } from './image/card-image.large.directive';

@NgModule({
  declarations: [
    CardHeaderDirective,
    CardContentDirective,
    CardMainTextDirective,
    CardSubTextDirective,
    CardDescriptionTextDirective,
    CardImageDirective,
    CardImageSmallDirective,
    CardImageMediumDirective,
    CardImageLargeDirective,
  ],
  exports: [
    CardHeaderDirective,
    CardContentDirective,
    CardMainTextDirective,
    CardSubTextDirective,
    CardDescriptionTextDirective,
    CardImageDirective,
    CardImageSmallDirective,
    CardImageMediumDirective,
    CardImageLargeDirective,
  ],
})
export class CardModule {}
