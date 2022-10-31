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

  togglecoll(): void {
    this.collapsed= !this.collapsed
  }
  closesidenav():void {
    this.collapsed= false
  }

}
