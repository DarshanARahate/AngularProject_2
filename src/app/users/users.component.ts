import { Component, OnInit } from '@angular/core';
import { UserComponent } from "../user/user.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [UserComponent, FormsModule, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  allowNewUser = false;
  isUserCreated = false;
  userCreatedStatus = "No User is Created";
  userName = 'Test User';

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
  }

  changeUserCreatedStatus() {
    this.isUserCreated = true;
    this.userCreatedStatus = this.userName + " is Created";
  }

  onUpdateUser(event: Event) {
    this.userName = (event.target as HTMLInputElement).value
  }

  ngOnInit(): void {

  }
}
