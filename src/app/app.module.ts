import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRouteModule, routingComponents } from './app.route';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
