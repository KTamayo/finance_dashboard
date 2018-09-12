import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlphaVantageDataService } from './alpha-vantage-data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [AlphaVantageDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
