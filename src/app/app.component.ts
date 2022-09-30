import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EGRAS';

  constructor() {
    window.onload = function () {
      // if (window.location.href == sessionStorage.getItem("origin")) {
      //   sessionStorage.clear();
      // }
      sessionStorage.clear();

      console.log("page reloadd");

    }
    
  }

}
