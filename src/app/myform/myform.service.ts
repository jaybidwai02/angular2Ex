import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileService {
	constructor(private http: HttpClient){ }

	getUserData(){

		/*return {
			"userProfile": {
				"fname":"Jay",
				"lname":"Bidwai",
				"age":26,
				"country":3
			}
		}*/
		return this.http.get('assets/userdata.json')
	}
}