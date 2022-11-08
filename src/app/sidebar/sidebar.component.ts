import { Component, OnInit } from '@angular/core';
import { navbarData } from './nav-Data'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  collapsed = true;
  navData = navbarData;
  selectedMenu: any = 'Home';
  showstatus: boolean = true
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
}
