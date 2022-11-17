import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-Data'
import { Router } from '@angular/router';

import { ApiService } from 'src/app/Component/Service/utility.service';
import { ApiMethods } from 'src/app/Component/Service/ApiMethods';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private ApiService: ApiService, private ApiMethods: ApiMethods,) {

    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(1);
    };
    setTimeout(() => {
      // this.todaysDate = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
      // this.todaysTime = formatDate(this.today, 'hh:mm:ss a', 'en-US', '+0530');
    }, 1000);

  }
  ngOnInit(): void {
  }

  collapsed = true;
  GlobalSearch: any[]
  navData = navbarData;
  selectedMenu: any = 'Profile';
  showstatus: boolean = true
  showtrans: boolean = true
  selectedProfileeName = 'Select Profile'
  selectedTenderName = 'Select Tender'
  selectedDepartmentName = 'Select Department'
  selectedServiceName = 'Select Service'
  Search = 'Search...'
  selectPurpose = 'Select Search For'

  Soption: any = ''
  SelectedProfile: any = ''
  SelectedTender: any = ''
  SelectedDepartment: any = ''
  SelectedService: any = ''



  Department: any = []
  profile: any = []

  options: number = 1
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
      Verify: "Verify",
      status: false

    },
    {
      id: 2,
      Grn: "25412522",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: "Verify",
      status: false
    },
    {
      id: 3,
      Grn: "25412523",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: "",
      status: false
    },
    {
      id: 4,
      Grn: "25412524",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: "Verify",
      status: false
    },
    {
      id: 5,
      Grn: "25412525",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: "",
      status: false
    },
    {
      id: 6,
      Grn: "25412526",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: "Verify",
      status: true
    },
    {
      id: 7,
      Grn: "25412527",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: "",
      status: false
    },

  ];
  Latest_trans = [
    {
      id: 1,
      Grn: "25412521",
      ChallanDate: "12/02/2022",
      Status: "Pending",
      PaymentType: "Online",
      Amount: "16.00",
      Verify: "Verify",
      status: false

    },

  ];
  paymode: any = [
    {
      id: 1,
      type: 'E-Banking',
      img: '../../../assets/Images/home_screen/online-banking.png',
      status: false

    },
    {
      id: 2,
      type: 'Manual Anywhere',
      img: '../../../assets/Images/home_screen/cash-on-delivery.png',
      status: false

    },
    {
      id: 3,
      type: 'NEFT/RTGS',
      img: '../../../assets/Images/home_screen/credit-card.png',
      status: false

    },
    {
      id: 4,
      type: 'Manual',
      img: '../../../assets/Images/home_screen/money.png',
      status: false

    },
    {
      id: 5,
      type: 'UPI',
      img: '../../../assets/Images/home_screen/credit-card (1).png',
      status: false
    },
  ]

  pay_opt: any = [
    {
      id: 1,
      type: 'View',
      img: '../../../assets/Images/home_screen/icons-01.png',
      status: false
    },
    {
      id: 2,
      type: 'Repeat',
      img: '../../../assets/Images/home_screen/icons-02.png',
      status: false
    },
    {
      id: 3,
      type: 'Verify',
      img: '../../../assets/Images/home_screen/icons-03.png',
      status: false
    },
    {
      id: 4,
      type: 'PDF',
      img: '../../../assets/Images/home_screen/icons-04.png',
      status: false
    },
  ]
  pay_opt1: any = [
    {
      id: 1,
      type: 'Repeat',
      img: '../../../assets/Images/home_screen/icons-02.png',
      status: false
    },
    {
      id: 2,
      type: 'PDF',
      img: '../../../assets/Images/home_screen/icons-04.png',
      status: false
    },
  ]

  purpose: any = [
    {
      id: 1,
      name: 'Department Search',
      status: false

    },
    {
      id: 2,
      name: 'Budget Head Search',
      status: false

    },
    {
      id: 3,
      name: 'Purpose Search',
      status: false

    }
  ]

  purpose_list: any = [
    {
      id: 1,
      name: '104-Transport Department',
      status: false
    },
    {
      id: 2,
      name: '152-Agricultural Department',
      status: false
    },
    {
      id: 3,
      name: '82-Rajasthan public service',
      status: false
    },
    {
      id: 4,
      name: '82-Rajasthan public service',
      status: false
    },
    {
      id: 7,
      name: '82-Rajasthan public service',
      status: false
    },
    {
      id: 8,
      name: '82-Rajasthan public service',
      status: false
    },
    {
      id: 9,
      name: '82-Rajasthan public service',
      status: false
    },

    {
      id: 6,
      name: '82-Rajasthan public service',
      status: false
    },
  ]
  Major_list: any = [
    {
      id: 1,
      name: '	0075-00-101-00-00',
      status: false
    },
    {
      id: 2,
      name: '	0075-00-101-00-01',
      status: false
    },
    {
      id: 3,
      name: '	0075-00-101-00-02',
      status: false
    },
    {
      id: 4,
      name: '	0075-00-101-00-03',
      status: false
    },
  ]

  togglecoll(): void {
    this.collapsed = !this.collapsed
  }
  closesidenav(): void {
    this.collapsed = false
  }

  goTo(paramText: string) {
    this.selectedMenu = paramText
  }
  myFunction() {
    alert('hello')
  }
  onchg_status(val) {
    console.log('press', val);
    this.paymode.map((item) => {
      console.log("valuuuuu", item);
      item.status = false

    })
    const found = this.paymode.findIndex(el => el.id === val.id);
    console.log('sssss', found);

    this.paymode[found].status = true
    console.log("newww__arrrr_", this.paymode);
  }
  onchg_transaction(val) {
    console.log('press', val);
    this.students.map((item) => {
      console.log("valuuuuu", item);
      item.status = false

    })
    const found = this.students.findIndex(el => el.id === val.id);
    console.log('sssss', found);

    this.students[found].status = true
    console.log("newww__arrrr_", this.students);
  }
  onchg_Dept(val) {
    console.log('press', val);
    this.purpose_list.map((item) => {
      console.log("valuuuuu", item);
      item.status = false

    })
    const found = this.purpose_list.findIndex(el => el.id === val.id);
    console.log('sssss', found);

    this.purpose_list[found].status = true
    console.log("newww__arrrr_", this.purpose_list);
  }
  onchg_Major(val) {
    console.log('press', val);
    this.Major_list.map((item) => {
      console.log("valuuuuu", item);
      item.status = false

    })
    const found = this.Major_list.findIndex(el => el.id === val.id);
    console.log('sssss', found);

    this.Major_list[found].status = true
    console.log("newww__arrrr_", this.Major_list);
  }
  onchg_search(val) {
    console.log('press', val);
    this.purpose_list.map((item) => {
      console.log("valuuuuu", item);
      item.status = false

    })
    const found = this.purpose_list.findIndex(el => el.id === val.id);
    console.log('sssss', found);

    this.purpose_list[found].status = true
    console.log("newww__arrrr_", this.purpose_list);
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
  getProfileList() {
    // let userId = localStorage.getItem('userId')
    // let userType = localStorage.getItem('UserType')

    let data = {
      "userId": 710,
      "userPro": 10,
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

  changeService(val) {
    console.log(val);
    this.SelectedService = val
  }
  changeProfile(val) {
    console.log(val);
    this.SelectedProfile = val
  }
  changeTender(val) {
    console.log(val);
    this.SelectedTender = val
  }
  changeDepartment(val) {
    console.log(val);
    this.SelectedDepartment = val
  }

  onSubmit() {
    if (this.Soption == 2) {
      if (this.SelectedDepartment == '') {
        alert('Select Department Service')
      }
      else if (this.SelectedService == '') {
        alert('Select Service')
      }
    }
    else if (this.Soption == 1) {
      if (this.SelectedProfile == '') {
        alert('Select Profile Service')
      }
    }
    else if (this.Soption == 3) {
      if (this.SelectedTender == '') {
        alert('Select Tender Service')
      }
    }
    else  {
      alert('Please Select at least one service')
    }
    // if (this.SelectedDepartment || this.SelectedProfile || this.SelectedTender || this.SelectedService == '') { alert('hellow') }
  }

  DepartmentList() {

  }

  CommonApi(val: any) {
    let url = '';
    if (val == 'Department Search') {
      url = this.ApiService.getDepartment
    }
    this.ApiMethods.getservice(url).subscribe(resp => {
      console.log("Dept__res", resp.result);
      let response = resp.result
      if (response && response.length > 0) {
        this.GlobalSearch = response
      }
    })
  }



  option_select(val) {
    console.log("ssssssss", val);
    this.Soption = val

    this.options = val
    if (val == 2) {
      this.getDepartmentList()
    }
    else if (val == 1) {
      this.getProfileList()
    }
  }

  SearchFor(data: any) {
    console.log("valllllll", data.target.value);
    let val = data.target.value;

    this.CommonApi(val);


  }
}
