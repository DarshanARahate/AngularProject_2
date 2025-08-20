import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { UserComponent } from './app/user/user.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 
bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
