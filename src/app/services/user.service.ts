import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  
  returnUrl = "home";
  userData:any;
  loggedIn:boolean;
  token = window.sessionStorage.getItem("token");
  userId = window.sessionStorage.getItem("userId");
  
  apiBaseUrl = 'http://mean-stack-charlie-2018-karlo-phortonssf.c9users.io:8080/api'
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
    this.http.post(this.logoutUrl)
  }
  
  toHomePage(resData){
    window.sessionStorage.setItem("token", resData.token);
    window.sessionStorage.setItem("userId", resData.userId);
    this.router.navigate([this.returnUrl]);
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