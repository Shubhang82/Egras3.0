import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/Component/Helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isVisible: number = 2;
  isSelected: boolean = true;
  constructor(private router: Router,) { }
  selectedCar: number;
  selectedCityName = 'Select Profile';
  selectedDepartmentName = 'Select Department'
  selectedServiceName = 'Select Service'
  showtrans: boolean 
  profile = [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
    { id: 4, name: 'test4' },
  ];
  Department = [
    { id: 1, name: 'Department1' },
    { id: 2, name: 'tDepartment2' },
    { id: 3, name: 'Department3Department3Department3Department3Department3Department3Department3' },
    { id: 4, name: 'Department4' },
  ];
  Service = [
    { id: 1, name: 'Service1' },
    { id: 2, name: 'tService2tService2tService2tService2tService2tService2tService2tService2tService2tService2' },
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
  }
  onclosetrans() {
    this.showtrans= false
  }
  onTransaction() {
    this.showtrans = !this.showtrans
  }
  onLogout() {
    sessionStorage.removeItem('token');

    this.router.navigate(['']);

  }

}
