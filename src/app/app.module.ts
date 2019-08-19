import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WinStreakComponent } from './win-streak/win-streak.component';
import { DisplayComponent } from './display/display.component';
import { ToolMenuComponent } from './tool-menu/tool-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    WinStreakComponent,
    DisplayComponent,
    ToolMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
