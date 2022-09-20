import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challan',
  templateUrl: './challan.component.html',
  styleUrls: ['./challan.component.css']
})
export class ChallanComponent implements OnInit {
  Tokenval: string = ""
  constructor(private router: Router) {
    let name = sessionStorage.getItem('token');
    console.log("token value",name);
    
   }
  ngOnInit(): void {
  }

  onlink() {


    this.router.navigate(['Test']);
    // alert("hello")

  }
}


