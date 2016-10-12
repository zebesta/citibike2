import { Component } from '@angular/core';
import { CitibikeService } from './citibike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CitibikeService]
})
export class AppComponent {
  title = 'app works!';
  hello: string = "Hello!!!!";
  number = 5;
}
