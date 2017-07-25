import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {MyformComponent} from './myform/myform.component';
// import { HttpClient } from '@angular/common/http';

import { RouterModule ,Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
	{path:'', component: HomeComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'myform', component: MyformComponent}
];

@NgModule({
	imports:[
		RouterModule.forRoot(
			APP_ROUTES,
			{ enableTracing: true }
		)
	],
	exports:[RouterModule]
})

export class AppRouteModule{};

export const routingComponents = [HomeComponent, ContactComponent, MyformComponent];