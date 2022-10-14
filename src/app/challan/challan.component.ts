import { Component, ViewChild } from '@angular/core';
// import {MatMenuTrigger} from '@angular/material'
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
      selector: 'app-challan',
      templateUrl: './challan.component.html',
      styleUrls: ['./challan.component.css']
    })
export class ChallanComponent  {
  name = 'Angular 6';
  isLoggedIn = false;
    // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    @ViewChild('menuBtn1', { read: MatMenuTrigger, static: true}) trigger: MatMenuTrigger;
    @ViewChild('menuBtn2', { read: MatMenuTrigger, static: true}) menu2: MatMenuTrigger;
    @ViewChild('menuBtn3', { read: MatMenuTrigger, static: true}) menu3: MatMenuTrigger;

    @ViewChild(MatSidenav)
 sidenav!: MatSidenav;
    constructor( private router: Router) {


      }


  openMyMenu() {
    this.trigger.toggleMenu();
  }

  closeMyMenu() {
    this.trigger.closeMenu();
    console.log('close')
  }   
  onchange() {
    // this.router.navigate(['ChangePassword']);

  }

  // ngAfterViewInit() {
  //   this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
  //     if (res.matches) {
  //       this.sidenav.mode = 'over';
  //       this.sidenav.close();
  //     } else {
  //       this.sidenav.mode = 'side';
  //       this.sidenav.open();
  //     }
  //   });
  // }
}

export interface Food {
  value: string;
  viewValue: string;
}



// import { Component, ViewChild } from '@angular/core';
// import { MatMenuTrigger } from '@angular/material/menu';
// @Component({
//   selector: 'app-challan',
//   templateUrl: './challan.component.html',
//   styleUrls: ['./challan.component.css']
// })
// export class ChallanComponent {
//   name = 'Angular 6';
//   isLoggedIn = false;
//   @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
//   @ViewChild(MatMenuTrigger) trigger1: MatMenuTrigger;


//   countries: any[] = [
//     { value: 1, name: 'America' },
//     { value: 2, name: 'India' },
//   ];

//   foods: any[] = [
//     { value: 1, name: 'Pizza', state: 'California' },
//     { value: 2, name: 'Burger', state: 'California' },
//     { value: 3, name: 'McDonald', state: 'Missisippi' },
//     { value: 4, name: 'Daal Baafle', state: 'Rajasthan' },
//     { value: 5, name: 'Rice & Fish', state: 'Odisha' },
//     { value: 6, name: 'Chicken Curry', state: 'Odisha' },
//   ];


//   states: any[] = [
//     { value: 1, name: 'New York', countryId: 'America' },
//     { value: 2, name: 'California', countryId: 'America' },
//     { value: 3, name: 'Missisippi', countryId: 'America' },
//     { value: 4, name: 'Nevada', countryId: 'America' },
//     { value: 5, name: 'Maharashtra', countryId: 'India' },
//     { value: 6, name: 'Odisha', countryId: 'India' },
//     { value: 7, name: 'Rajasthan', countryId: 'India' },
//     { value: 8, name: 'Madhya Pradesh', countryId: 'India' },

//   ];



//   openMyMenu() {
//     this.trigger.toggleMenu();
    
//   }
//   closeMyMenu() {
//     this.trigger.closeMenu();
//     console.log('close')
//   }
// }

// export interface Food {
//   value: string;
//   viewValue: string;
// }
