import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { APP_ROUTES } from './app.route';
import { RouterModule } from '@angular/router';
import { MyformComponent } from './myform/myform.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MyformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
		APP_ROUTES,
		{ enableTracing: true } // <-- debugging purposes only
	)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
