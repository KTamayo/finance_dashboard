import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }
  
  returnUrl="home";
  
  registrationUrl='http://mean-stack-charlie-2018-karlo-phortonssf.c9users.io:8080/api/appUsers';
  loginUrl='http://mean-stack-charlie-2018-karlo-phortonssf.c9users.io:8080/api/appUsers/login';
  
  register(user){
    return this.http.post(this.registrationUrl, user);
  }
  
  login(user){
    return this.http.post(this.loginUrl, user);
  }
  
  toHomePage(resData){
    window.sessionStorage.setItem( "token", resData.token)
    window.sessionStorage.setItem( "userId", resData.userId)
    this.router.navigate([this.returnUrl])
  }
}
