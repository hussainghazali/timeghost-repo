import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimetrackingBarComponent } from './timetracking-bar/timetracking-bar.component';
import { DisplayTimeComponent } from './display-time/display-time.component';

@NgModule({
  declarations: [
    AppComponent,
    TimetrackingBarComponent,
    DisplayTimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
