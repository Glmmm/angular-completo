import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeuCompComponent } from './meu-comp/meu-comp.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [AppComponent, MeuCompComponent, CardComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
