import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styles: [
    `h1 {
      color: green;
      font-size: 24px;
      font-weight: bold;
    }`
  ],
  imports: [UserComponent],
})
export class AppComponent {
  title = 'AngularProject_2';
}
