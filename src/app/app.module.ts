import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { ChartsModule } from 'ng2-charts';

import { Routing } from "./app.routing";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ClarityModule,
    ClrFormsNextModule,
    BrowserAnimationsModule,
    ChartsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
