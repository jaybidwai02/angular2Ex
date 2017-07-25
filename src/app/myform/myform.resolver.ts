import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {MyformComponent} from './myform.component';
import { UserProfileService } from './myform.service';


@Injectable()
export class MyFormResolver implements Resolve<MyformComponent>{
	constructor( private userPro: UserProfileService,){}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):Promise<any>|any{
		return this.userPro.getUserData().subscribe(res =>{
	  		console.log(res);
	  		return res['userProfile'];
	  	})
	}
}
