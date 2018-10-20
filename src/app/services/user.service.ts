import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  
  userData:any;
  loggedIn:boolean;
  token = window.sessionStorage.getItem("token");
  userId = window.sessionStorage.getItem("userId");

  // TODO: Need to apply dev/prod env switch logic
  // apiBaseUrl = 'http://localhost:3000/api'
  apiBaseUrl = environment.apiBaseUrl;
  registrationUrl = `${this.apiBaseUrl}/appUsers`;
  loginUrl = `${this.apiBaseUrl}/appUsers/login`;
  logoutUrl = `${this.apiBaseUrl}/appUsers/logout?access_token=${this.token}`;

  register(user){
    return this.http.post(this.registrationUrl, user);
  }

  login(user){
    return this.http.post(this.loginUrl, user);
  }

  logout(){
    this.http.post(this.logoutUrl,{});
    this.userData = false;
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("userId");
    this.router.navigate(["login"]);
  }

  toHomePage(resData){
    window.sessionStorage.setItem("token", resData.token);
    window.sessionStorage.setItem("userId", resData.userId);
    this.router.navigate(["home"]);
  }

  getUserData(){
    this.token = window.sessionStorage.getItem("token");
    this.userId = window.sessionStorage.getItem("userId");
    this.http.get(`${this.apiBaseUrl}/appUsers/${this.userId}?access_token=${this.token}`)
      .subscribe( userRes => {
        this.userData = userRes;
      });
  }
}
