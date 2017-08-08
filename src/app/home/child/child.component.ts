import { Component, OnInit, OnChanges, Input, Output,EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  encapsulation: ViewEncapsulation.Native,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

	@Input() fname;
	//@Input() lname:any;
	@Output() inpCh = new EventEmitter();

  constructor() { 

  }

  

  ngOnInit() {
  	//this.fname = 'j';
  }

  ngOnChanges(c){
  	console.log('in ngOnChanges')
  	console.log(c)
  }

  onInpChng(e){
  	// console.log('change');
  	this.fname = e;

  	this.inpCh.emit(this.fname)
  }

}
