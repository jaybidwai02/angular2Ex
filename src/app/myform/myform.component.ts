import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/pluck';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css'],
  providers: []
})
export class MyformComponent implements OnInit {

	countries = [
		{
			id:1,
			name:'India'
		},
		{
			id:2,
			name:'UAE'
		}
	]

  userData = {
  	country:{}
  };

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute ) { }



  filterValues(obj){
      /*var build = angular.isArray(obj) ? [] : {};

      for(var entry in obj){
          var value = obj[entry];
          if(typeof value == 'object'){
              value = initialValues(value)
          }
          if(!angular.isArray(obj)){
              build[entry+'_initial'] = value;
          }else{
              build.push(value);
          }
      }
      return build;*/

      for(let val in obj){
      	var value = obj[val];

      	if(typeof value == "object"){
      		obj[val] = value['id'];
      	}
      }

      return obj;
  }

  onSelect(inp){
  	console.log(inp);
  }

  onSubmit(event){
  	let data = this.filterValues(Object.assign({},this.userData));

  	this.http.post('assets/post.json', data).subscribe(()=>{
  		console.log('form submit')
  	})
  }

  ngOnInit() {
  	/*this.http.get('assets/userdata.json').subscribe(res => {
  		this.userData = res['userProfile'];
  	});*/

  	console.log('my form');

  	console.log(this.activeRoute);

  	/*this.userPro.getUserData().subscribe(res =>{
  		console.log(res);
  		this.userData = res['userProfile'];
  	})*/

  	//console.log(this.activeRoute.data.pluck('userDataProfile'))
  }

}
