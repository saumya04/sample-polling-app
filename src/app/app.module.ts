import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PollsComponent } from './polls/polls.component';
import { GrowOnHoverDirective } from './grow-on-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    PollsComponent,
    GrowOnHoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
