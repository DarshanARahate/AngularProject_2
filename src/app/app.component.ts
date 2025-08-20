import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { FooterComponent } from "./types_of_selectors/class_selector/footer/footer.component"; 
 
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [UserComponent, FooterComponent],
})
export class AppComponent {
  title = 'AngularProject_2';
}
