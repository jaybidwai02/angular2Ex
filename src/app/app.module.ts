import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRouteModule, routingComponents } from './app.route';

//chart.js
import { ChartsModule } from 'ng2-charts';
import { CreditCardModule } from './credit-card/credit-card.module'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
// import creditService from './credit-card/credit-card.service';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CreditCardModule,
    AppRouteModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
