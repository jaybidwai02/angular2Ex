import { Component, OnInit } from '@angular/core';

import creditService from './credit-card.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

	public viewModal;

  constructor(private creditService: creditService) { }

  ngOnInit() {
  	this.creditService.setCreditScore(200);
  	this.viewModal = this.creditService.getCreditScore();
  }

}
