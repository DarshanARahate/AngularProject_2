import { Component, OnInit } from '@angular/core';
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'app-users',
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  allowNewUser = false;

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }

  ngOnInit(): void {
   
  }
}
