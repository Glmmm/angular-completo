import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { NoDirectiveComponent } from './no-directive/no-directive.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [AppComponent, DirectiveComponent, NoDirectiveComponent, HighlightDirective],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
