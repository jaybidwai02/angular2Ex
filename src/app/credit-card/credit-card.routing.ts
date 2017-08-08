import { Routes, RouterModule } from '@angular/router';

import {CreditCardComponent} from './credit-card.component';

const routes: Routes = [
  { path: '', component: CreditCardComponent }
];

export const routing = RouterModule.forChild(routes);