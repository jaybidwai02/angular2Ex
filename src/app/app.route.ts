import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {MyformComponent} from './myform/myform.component';
import { MyFormResolver } from './myform/myform.resolver';

import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
	{path:'', component: HomeComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'myform', component: MyformComponent, resolve:{
		userDataProfile: MyFormResolver
	}}
];

/*export const APP_ROUTES_PROVIDER = [
	provideRouter(APP_ROUTES)
];*/