import { Component, ViewChild } from '@angular/core';
// import {MatMenuTrigger} from '@angular/material'
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-challan',
  templateUrl: './challan.component.html',
  styleUrls: ['./challan.component.css']
})
export class ChallanComponent {
  name = 'Angular 6';
  isLoggedIn = false;
  today = new Date();
  todaysDate = '';
  todaysTime = '';
  // @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  data = [
    {
      'main1': ['sub1', 'sub2'],
      'main2': ['sub1', 'sub2'],
    }
  ]

  @ViewChild('menuBtn1', { read: MatMenuTrigger, static: true }) trigger: MatMenuTrigger;
  @ViewChild('menuBtn2', { read: MatMenuTrigger, static: true }) menu2: MatMenuTrigger;
  @ViewChild('menuBtn3', { read: MatMenuTrigger, static: true }) menu3: MatMenuTrigger;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private router: Router) {
    setTimeout(() => {
      this.todaysDate = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
      this.todaysTime = formatDate(this.today, 'hh:mm:ss a', 'en-US', '+0530');
    }, 1000);

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
  onLogout() {
    // localStorage.clear()
    localStorage.removeItem('Login_ID');
    sessionStorage.removeItem('token');
    localStorage.removeItem('user_ID');

    this.router.navigate(['']);

  }
  onclick(value: string) {
    this.router.navigate([value]);
  }
}


export interface Food {
  value: string;
  viewValue: string;
}