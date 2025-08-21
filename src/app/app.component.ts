import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [UsersComponent, FormsModule],
})
export class AppComponent {
  title = 'AngularProject_2';
}
