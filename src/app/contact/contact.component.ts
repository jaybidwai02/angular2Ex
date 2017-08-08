import { Component, OnInit } from '@angular/core';

import creditService from '../credit-card/credit-card.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	public cScore;
  constructor(private creditService: creditService) { }

  ngOnInit() {
  	this.cScore = this.creditService.getCreditScore();
  }

}
