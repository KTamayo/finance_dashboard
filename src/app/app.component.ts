import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinDash';

  constructor(public _userService: UserService) { }

  ngOnInit() {
    this._userService.getUserData();
  }
}
