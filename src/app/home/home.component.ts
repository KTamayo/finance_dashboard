import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _userService: UserService) { }
  
  token:string;
  userId:string;
  userData:any;
  userName:string;
  
  ngOnInit() {
    this._userService.getUserData()
      .subscribe(res => {
        this.userData = res;
        console.log(this.userData);
      });
    console.log(this._userService.token, "token");
    console.log(this._userService.userId, "userId");
    
  }
  
  
}
