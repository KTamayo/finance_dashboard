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
        this._userService.toHomePage(res);
      })
  }

}
