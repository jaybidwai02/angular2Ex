import { Component, OnInit,OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges {

	public observerData : Observable<number>;
	private valueArr : Array<number> = [];


	homeTitle = "this is for string interpolation";

	inpVal = "my name is jay";
	inpVal1 = "my name is jayy";

	classes = {
		first:true,
		second:false,
		third:true
	}

	componentStyle = {
		'color':'#b3b3b3',
		'font-size':'18px'
	}

	switchRouting = {
		name: 1
	}

	fnamef :number;
	lname = {
		name:'jay'
	}

	@Input() data;

	@Output() onMessage = new EventEmitter();

	showMsg(event){
		alert('in show')
		this.onMessage.emit(event);
	}

	// console.log(data);

	alertMe(para){
		alert(para)
	}

  constructor() { 
  	this.fnamef = 0;
  }

  

  ngOnInit() {
  	this.classes.second = true;
  }

  ngOnChanges(c){
  	console.log('in ngOnChanges')
  	console.log(c)
  }

  start(){
  	this.observerData = new Observable( observer => {

  		setTimeout( () =>{
  			observer.next(10)
  		},1000 );

  		setTimeout( () =>{
  			observer.next(100)
  		},2000 );

  		setTimeout( () =>{
  			observer.complete()
  		},3000);
  	});

  	let observerSubscription = this.observerData.subscribe(
  		(value) => {this.valueArr.push(value)},
  		error => console.log(error),
  		() => console.log('finished')
  	)

  }

  directiveClick(){
  	alert('I am from home')
  }

}

/*
 * INTERFACE
 *
 */

//simple restriction to fun parameter
/*function print(obj: {name:string}){
	console.log(obj);
}*/

//above restriction using interface is
interface functionPara{
	name: string,
	age?: number //optional parameter (?)
}

function print(obj: functionPara){
	console.log(obj)
}

let obj1 = {age:26,name:'jay'};
let obj2 = {name:'jay'};

print(obj1);
print(obj2);

// class interface

interface show{
	msg: string,
	show();
}

class MyClass implements show{
	msg:'I am from interface class'
	show(){
		console.log(this.msg);
	}
}

// interface can be extended

interface parent{
	name:string
}
interface child extends parent{
	age:number
}

class person implements child{
	age:26
	name:'jay'
}

/*
 * Static members of class
 *
 */

 class Emp{
 	static empId: number = 100

 	show(){
	 	console.log(Emp.empId); //Access static members by using class name
 	}
 }

 let ob = new Emp();
 ob.show();

 /*
  *
  * Generic Types
  *
  */

 function log<T>(arg:T):T{
 	return arg;
 }

 let test = log<number>(10);
 console.log(test);
 let test1 = log('jay');
 console.log(test1);
