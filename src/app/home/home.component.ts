import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	homeTitle = "this is for string interpolation";

	inpVal = "my name is jay";
	inpVal1 = "my name is jayy";

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

  constructor() { }

  ngOnInit() {
  }

}
