import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  loginWithTwitter(){
    console.log('loginWithTwitter called..');
    this.http.get('http://localhost:1234/loginWithTwitter',{
      withCredentials: true
    }).toPromise().then(data=>{
      console.log('data obtained is', data);        
  
  }).catch(err=>console.log('request failed', err));
  }

}
