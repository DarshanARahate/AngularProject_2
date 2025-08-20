import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [UsersComponent],
})
export class AppComponent {
  title = 'AngularProject_2';
}
