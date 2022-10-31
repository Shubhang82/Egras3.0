import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/Component/Helper';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import axios from 'axios';

import { ApiService } from 'src/app/Component/Service/utility.service';
import { ApiMethods } from 'src/app/Component/Service/ApiMethods';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../../Component/style.css']
})
export class ProfileComponent implements OnInit {
  isVisible: number = 1;
  isSelected: boolean = true;
  constructor(private router: Router, private ApiService: ApiService, private ApiMethods: ApiMethods,) {

    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(1);
    };
    setTimeout(() => {
      // this.todaysDate = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
      // this.todaysTime = formatDate(this.today, 'hh:mm:ss a', 'en-US', '+0530');
    }, 1000);

    this.getProfileList()
    this.getDepartmentList()
  }

  sayHi() {
    alert('Hello');
  }

  selectedCar: number;
  selectedCityName = 'Select Profile';
  selectedDepartmentName = 'Select Department'
  selectedServiceName = 'Select Service'
  showtrans: boolean
  today = new Date();
  todaysDate = '';
  todaysTime = '';
  isshow: boolean = true


  // profile = [
  //   { id: 1, name: 'test1' },
  //   { id: 2, name: 'test2' },
  //   { id: 3, name: 'test3' },
  //   { id: 4, name: 'test4' },
  // ];
  profile: any = []
  Department: any = []
  public screenWidth: any;
  public screenHeight: any
  // Department = [
  //   { id: 1, name: 'Department1' },
  //   { id: 2, name: 'tDepartment2' },
  //   { id: 3, name: 'Department3Department3Department3Department3Department3Department3Department3' },
  //   { id: 4, name: 'Department4' },
  // ];

  Service = [
    { id: 1, name: 'Service1' },
    { id: 2, name: 'ts tssslskj' },
    { id: 3, name: 'Service3' },
    { id: 4, name: 'Service4' },
  ];
  students = [
    {
      id: 1,
      Grn: "25412521",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: "Verify"
    },
    {
      id: 2,
      Grn: "25412522",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: "Verify"
    },
    {
      id: 3,
      Grn: "25412523",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: ""
    },
    {
      id: 4,
      Grn: "25412524",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: "Verify"
    },
    {
      id: 5,
      Grn: "25412525",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: ""
    },
    {
      id: 6,
      Grn: "25412526",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: "Verify"
    },
    {
      id: 7,
      Grn: "25412527",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: ""
    },

  ];
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
  onclosetrans() {
    this.showtrans = false
  }
  onTransaction() {
    this.showtrans = true
  }
  onLogout() {
    // localStorage.clear()
    localStorage.removeItem('Login_ID');
    sessionStorage.removeItem('token');
    localStorage.removeItem('user_ID');

    this.router.navigate(['']);

  }

  OncreateP() {
    this.router.navigate(['CProfile']);
  }


  getProfileList() {
    let userId = localStorage.getItem('userId')
    let userType = localStorage.getItem('UserType')

    let data = {
      "userId": userId,
      "userPro": userType,
      "type": "string"
    }
    console.log("Post_profilelist_datat__", data);

    this.ApiMethods.postresultservice(this.ApiService.GetProfile_List, data).subscribe(resp => {
      console.log("Profilelist_res", resp.result);
      let response = resp.result
      if (response && response.length > 0) {
        this.profile = response
      }
    })
  }
  getDepartmentList() {
    this.ApiMethods.getservice(this.ApiService.getDepartment).subscribe(resp => {
      console.log("Dept__res", resp.result);
      let response = resp.result
      if (response && response.length > 0) {
        this.Department = response
      }
    })
  }
  onstatuscheck() {
    console.log("buttonpress");

    this.isshow = !this.isshow;
  }

}
