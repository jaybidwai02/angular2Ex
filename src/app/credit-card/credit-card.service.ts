import {Injectable} from '@angular/core';

@Injectable()
export default class creditCardService{
	private creditScore:number = 100;
	constructor(){ }

	setCreditScore(score):void{
		this.creditScore = score;
	}

	getCreditScore():number{
		return this.creditScore;
	}
}