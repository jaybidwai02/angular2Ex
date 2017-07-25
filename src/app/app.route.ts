import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {MyformComponent} from './myform/myform.component';
// import { HttpClient } from '@angular/common/http';

import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
	{path:'', component: HomeComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'myform', component: MyformComponent}
];

/*export const APP_ROUTES_PROVIDER = [
	provideRouter(APP_ROUTES)
];*/