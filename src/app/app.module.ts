import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FilhoComponent } from './filho/filho.component';

@NgModule({
  declarations: [AppComponent, FilhoComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
