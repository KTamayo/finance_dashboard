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
  
  ngOnInit() {
  }
  
   onLoginUser() {
    this._userService.login(this.user)
      .subscribe((res) => {
        console.log(res, "asdf")
        // this._userService.toHomePage(res);
      })
  }

}
