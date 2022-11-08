
import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/Component/Helper';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import * as Val from '../../Component/Utility/Validators/ValBarrel'

import { ApiService } from 'src/app/Component/Service/utility.service';
import { ApiMethods } from 'src/app/Component/Service/ApiMethods';
import { ICreateProfile } from '../Interface/c-profile';
export interface ProfileAcc {
  ProfileName: string;
}

@Component({
  selector: 'app-c-profile',
  templateUrl: './c-profile.component.html',
  styleUrls: ['./c-profile.component.css', '../../Component/style.css']
})
export class CProfileComponent implements OnInit {
  PDAccdata: MatTableDataSource<ProfileAcc> = new MatTableDataSource();
  displayedColumns = [
    'ProfileName'
  ];
  Heros: any = [];
  isVisible: number = 2;
  ProfileForm!: FormGroup;

  selecteditem: number
  isSelected: boolean = true;

  model: ICreateProfile = {
    Prof_Name: '',
    Department: '',
    MajorHead: '',
    BudgetHead: '',
    ipAddress: '',
    rnd: ''
  };


  constructor(private router: Router, private ApiService: ApiService, private ApiMethods: ApiMethods,) {
    // setTimeout(() => {  this.todaysDate = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
    // this.todaysTime = formatDate(this.today, 'hh:mm:ss a', 'en-US', '+0530');}, 1000);
    // this.filteredOptions = [...this.Heros];
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(1);
    };
    console.log("dataatttt______Ss");

  }


  selectedCar: number;
  Department_lab = 'Select Department';
  Major_lab = 'Select Major Head';
  Selected_Department = {
    Deptcode: '',
    DeptName: ''
  }
  Selected_Major = {
    MajorCode: '',
    MajorName: ''
  }
  MoreHead: boolean = false;
  isshow: boolean = true

  showtrans: boolean
  today = new Date();
  todaysDate = '';
  todaysTime = '';
  selectedHero?: '';
  Url: string = ''

  compareFunction = (o1: any, o2: any) => o1.id === o2.id;
  selectedOptions = [{ id: 12, name: 'Dr. Nice' },];
  profile = [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
    { id: 4, name: 'test4' },
  ];
  Department: any = []
  MajorHead = [
    // { id: 1, name: 'Service1' },
    // { id: 2, name: 'tService2tService2tService2tService2tService2tService2tService2tService2tService2tService2' },
    // { id: 3, name: 'Service3' },
    // { id: 4, name: 'Service4' },
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
  final_BudgetHead: any = []

  userProfile = [];
  bgcolor = false

  toggle = false;
  searchbox = 1;
  displayStyle = "none";
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
    this.getDepartmentList()
    this.getUserProfileList()
  }

  openPopup() {
    this.displayStyle = "block";
    this.model.Prof_Name = this.ProfileForm.controls['ProfileName'].value;
  }
  closePopup() {
    this.displayStyle = "none";
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

      item.schemaName.toLowerCase().includes(searchTerm)
      // item.toLowerCase().includes(searchTerm)
    );
    console.log("fffffffffffffff", this.filteredOptions);

  }
  getvalue(val: string) {

  }
  onsub(value) {
    console.log("final_budgethaead", value);
    const { length } = this.final_BudgetHead;
    const found = this.final_BudgetHead.some(el => el.scheCode === value.scheCode);

    if (!found) {
      this.final_BudgetHead.push({ budgetHead: value.schemaName, scheCode: value.scheCode });
    }
    else {
      //remove item
      const itemToBeRemoved = value
      this.final_BudgetHead.splice(this.final_BudgetHead.findIndex(a => a.scheCode === itemToBeRemoved.scheCode), 1)
    }
    // return this.final_BudgetHead;
    console.log("newww__arrrr_", this.final_BudgetHead);

  }
  selectDept(val) {
    this.Selected_Department.Deptcode = val.DepartCode
    this.Selected_Department.DeptName = val.DepartName
    this.MoreHead = false
    this.MajorHead = []
    this.Major_lab = 'Select Major Head';
    this.Heros = []
    this.filteredOptions = []
    this.getMajorHeadList()

  }
  selectMajor(val) {
    console.log("slelct_major", val)
    this.Selected_Major.MajorCode = val.Majorheadcode
    this.Selected_Major.MajorName = val.Majorheadname
    this.getBudgetHead_List()
  }

  onMoreHeads() {
    this.MoreHead = true
    this.getMajorHeadList()

  }

  // onSelect(hero, index): void {
  //   console.log("seleleleel__", hero, index);
  //   // let ind = this.Heros.findIndex(x => x.name === hero.name);
  //   this.Heros.findIndex(function (entry, i) {
  //     if (entry.schemaName == hero.schemaName) {
  //       this.bgcolor = true
  //       this.selecteditem = i
  //       // return true;
  //     }
  //   });
  //   // console.log(ind);

  // }


  // get Department List Api
  getDepartmentList() {
    this.ApiMethods.getservice(this.ApiService.getDepartment).subscribe(resp => {
      console.log("Dept__res", resp.result);
      let response = resp.result
      if (response && response.length > 0) {
        this.Department = response
      }
    })
  }

  // get Major Head List Api
  getMajorHeadList() {
    this.Url = this.ApiService.GetMajorHead + this.Selected_Department.Deptcode + '/' + this.MoreHead
    this.ApiMethods.getservice(this.Url).subscribe(resp => {
      console.log("Major_head__res", resp.result);
      let response = resp.result
      if (response && response.length > 0) {
        this.MajorHead = response
      }
    })
  }

  // get budget head list api 
  getBudgetHead_List() {
    let userType = localStorage.getItem('UserType')
    let data = {
      "departCode": this.Selected_Department.Deptcode,
      "majorHead": this.Selected_Major.MajorCode,
      "userType": userType
    }
    console.log("budgethead_data____", data);

    this.ApiMethods.postresultservice(this.ApiService.GetBudgetHead_List, data).subscribe(resp => {
      console.log(resp.result);

      let response = resp.result
      if (response && response.length > 0) {
        this.Heros = response
        this.filteredOptions = response

      }
    })
  }

  // get user_profile List Api
  getUserProfileList() {
    let userid = localStorage.getItem('userId')
    this.Url = this.ApiService.GetUserProfile + userid
    this.ApiMethods.getservice(this.Url).subscribe(resp => {
      console.log("User_profile__res", resp.result);
      let response = resp.result
      if (response && response.length > 0) {
        // this.userProfile = response
        // Our sorting function
        this.userProfile = response.sort(
          (p1, p2) =>
            (p1.Sr > p2.Sr) ? 1 : (p1.Sr < p2.Sr) ? -1 : 0);
      }
    })
  }

  // get user active/deactive status
  setuser_Status(value, flag) {
    let UserId = localStorage.getItem('userId')
    let data = {
      "userId": UserId,
      "userPro": value.UserPro,
      "type": flag
    }
    console.log("Profilestatus_data____", value, flag, data);

    this.ApiMethods.postresultservice(this.ApiService.ProfileActive_Deactive, data).subscribe(resp => {
      console.log(resp.result);

      let response = resp.result
      if (response) {
        this.getUserProfileList()
      }
    })
  }

  //post create profile api
  onSubmit() {
    let userId = localStorage.getItem('userId')
    // let data = {
    //   "departCode": this.Selected_Department.Deptcode,
    //   "majorHead": this.Selected_Major.MajorCode,
    //   "userType": userType
    // }
    let data = {
      "deptCode": this.Selected_Department.Deptcode,
      "userId": userId,
      "userPro": 0,
      "profileName": this.model.Prof_Name,
      "budgetHead": this.final_BudgetHead
    }
    console.log("budgethead_data____", data);

    this.ApiMethods.postresultservice(this.ApiService.ProfileCreate, data).subscribe(resp => {
      console.log(resp.result);

      let response = resp.result
      if (response) {
        this.router.navigate(['Profile']);

      }
    })
  }


  get ProfileName() { return this.ProfileForm.get('ProfileName') }

  onstatuscheck() {
    console.log("buttonpress");

    this.isshow = !this.isshow;
  }
}
