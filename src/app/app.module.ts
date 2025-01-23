import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { NoDirectiveComponent } from './no-directive/no-directive.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DisabledDirective } from './directives/disabled.directive';
import { StyleDirective } from './directives/style.directive';
import { ClassDirective } from './directives/class.directive';
import { ListenerDirective } from './directives/listener.directive';

@NgModule({
  declarations: [AppComponent, DirectiveComponent, NoDirectiveComponent, HighlightDirective, DisabledDirective, StyleDirective, ClassDirective, ListenerDirective],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
