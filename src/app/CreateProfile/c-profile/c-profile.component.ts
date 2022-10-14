
import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/Component/Helper';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import * as Val from '../../Component/Utility/Validators/ValBarrel'

import { ApiService } from 'src/app/Component/Service/utility.service';
import { ApiMethods } from 'src/app/Component/Service/ApiMethods';

export interface ProfileAcc {
  ProfileName: string;
}

@Component({
  selector: 'app-c-profile',
  templateUrl: './c-profile.component.html',
  styleUrls: ['./c-profile.component.css']
})
export class CProfileComponent implements OnInit {
  PDAccdata: MatTableDataSource<ProfileAcc> = new MatTableDataSource();
  displayedColumns = [
    'ProfileName'
  ];
  Heros: any[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto-01122' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  isVisible: number = 2;
  ProfileForm!: any;
  selecteditem: number
  isSelected: boolean = true;
  constructor(private router: Router, private ApiService: ApiService, private ApiMethods: ApiMethods,) {
    // setTimeout(() => {  this.todaysDate = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
    // this.todaysTime = formatDate(this.today, 'hh:mm:ss a', 'en-US', '+0530');}, 1000);
    this.filteredOptions = [...this.Heros];

  }
  selectedCar: number;
  selectedCityName = 'Select Profile';
  selectedDepartmentName = 'Select Department'
  selectedServiceName = 'Select Major Head'
  showtrans: boolean
  today = new Date();
  todaysDate = '';
  todaysTime = '';
  selectedHero?: '';
  compareFunction = (o1: any, o2: any) => o1.id === o2.id;
  selectedOptions = [{ id: 12, name: 'Dr. Nice' },];
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
  bgcolor = false

  toggle = true;
  searchbox = 2;
  filteredOptions: any[] = []
  enableDisableRule() {
    this.toggle = !this.toggle;
    this.searchbox = 1
  }
  enableDisable() {
    this.toggle = !this.toggle;
    this.searchbox = 2
  }
  ngOnInit() {

    this.ProfileForm = new FormGroup({

      ProfileName: new FormControl('', [Val.Required, Val.Alphabet, Val.maxLength(25)]),

    });
    // this.loginForm.addValidators(
    //   )
    // );
  }
  onclosetrans() {
    this.showtrans = false
  }
  onTransaction() {
    this.showtrans = !this.showtrans
  }
  onChange(change) {
    console.log(change.option.value, change.option.selected);
  }
  onSearch(searchTerm: string) {
    this.filteredOptions = this.Heros.filter(item =>
      // console.log("item__",item)
      
      item.name.toLowerCase().includes(searchTerm)
      // item.toLowerCase().includes(searchTerm)
    );
    console.log("fffffffffffffff",this.filteredOptions);

  }
  getvalue(val:string) {

  }
  onsub(value) {
    console.log(value);

  }
  onLogout() {
    // localStorage.clear()
    localStorage.removeItem('Login_ID');
    sessionStorage.removeItem('token');
    localStorage.removeItem('user_ID');

    this.router.navigate(['']);

  }

  onSelect(hero, index): void {
    console.log("seleleleel__", hero, index);
    // let ind = this.Heros.findIndex(x => x.name === hero.name);
    this.Heros.findIndex(function (entry, i) {
      if (entry.name == hero.name) {
        this.bgcolor = true
        this.selecteditem = i
        // return true;
      }
    });
    // console.log(ind);

  }




}
