import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { CardModule } from './card/directives/card.module';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
