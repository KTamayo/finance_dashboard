import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public _userService:UserService) { }
  user:any = {};
  
  ngOnInit() {
  }
  
  onRegisterUser() {
    this._userService.register(this.user)
      .subscribe((res) => {
        // sessionStorage.setItem('token', res.token);
        // sessionStorage.setItem('userId', res.userId);
        console.log(res, "asdf")
        // this._userService.toHomePage(res);
      })
  }

}
