import { Component } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'simple-app';

  constructor() {}

  message!: string;

  receiveMessage($event: string) {
    this.message = $event;
  }

}

