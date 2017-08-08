import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CreditCardComponent} from './credit-card.component';
import creditService from './credit-card.service';
import { routing } from './credit-card.routing';

@NgModule({
	
	declarations: [
		CreditCardComponent
	],
	imports: [CommonModule, routing],
	providers: [
		creditService
	],
	exports: [CreditCardComponent]
})
export class CreditCardModule{

}