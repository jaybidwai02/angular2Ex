import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  custData = {
  	name:'Jay',
  	age:26
  }

  show(event){
  	alert('I am from show')
  }
}
