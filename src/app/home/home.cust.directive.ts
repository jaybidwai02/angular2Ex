import {Component,Directive,HostListener,Input} from '@angular/core';

@Directive({
	selector: '[custClick]'
})
export class ClickDirective{

	@Input() custClick;

	@HostListener('click',['$event'])
	onClick(){
		alert('I am from Directive')

		this.custClick();
	}
}