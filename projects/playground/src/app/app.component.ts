import { Component } from '@angular/core';
import {WindowResized} from "ngx-window-resized-event";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  log(event: WindowResized): void {
    console.log(event);
  }

}
