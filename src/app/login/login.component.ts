import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _userService:UserService) { }
  user:any = {};
  error:any;
  error401:boolean;

  ngOnInit() {
  }

  onLoginUser() {
    this._userService.login(this.user)
      .subscribe((res) => {
        this._userService.toHomePage(res);
      }, (err) => {
        this.error = err;
        if(this.error.status == 401){
          this.error401 = true;
        }
      });
  }

}
