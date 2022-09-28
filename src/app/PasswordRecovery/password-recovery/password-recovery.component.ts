import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as Val from '../../Component/Utility/Validators/ValBarrel'
import { MatTableDataSource } from '@angular/material/table';
import { IPasswordRecovery } from '../Interface/password-recovery';
import { ApiService } from 'src/app/Component/Service/utility.service';
import { ApiMethods } from 'src/app/Component/Service/ApiMethods';

export interface PasswordRevocery {
  LoginIdMobile: string;
  Mobile: string;
 
}


@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {


  PasswordRevocerydata: MatTableDataSource<PasswordRevocery> = new MatTableDataSource();
  displayedColumns = [
    'LoginIdMobile',
    'Mobile' 
  ];


  model: IPasswordRecovery = {
    loginIdMobile: "", 
    Mobile: ""

  };

  hash: any;
  PasswordRecoveryForm!: any;
  message!: string;
  loginflag: boolean = true;

  // constructor() { }

  // constructor(private formBuilder: FormBuilder, private router: Router, private PasswordRecoveryService: PasswordRecoveryService, private ApiService: ApiService, private List: List) { }
     constructor(private formBuilder: FormBuilder, private router: Router, private ApiService: ApiService, private ApiMethods: ApiMethods, ) 
     { 
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
    history.go(1);
    };
   }

  isVisible: number=1;
  isSelected: boolean = true;

  ngOnInit(){
 
    this.PasswordRecoveryForm = new FormGroup({
      loginIdMobile: new FormControl('', [Val.Required]),
      // Mobile: new FormControl('', [Val.Required]),      // Temp Comment
      Captcha: new FormControl('', [Val.Required]),
 
    });


  }
   



  onsubmit()   {
    this.model.loginIdMobile = this.PasswordRecoveryForm.controls['loginIdMobile'].value;
    // this.model.loginIdMobile = this.PasswordRecoveryForm.controls['Mobile'].value;
    // this.model.Captcha = this.PasswordRecoveryForm.controls['Captcha'].value;
 
      console.log(sessionStorage.getItem('loc'));
      // stop here if form is invalid
      if (this.PasswordRecoveryForm.invalid) {
        console.log('Error');
        return;
      }
      else {
        // alert(this.loginForm.valid);
        if (this.loginflag && this.PasswordRecoveryForm.valid) {

          // this.model.ipAddress = this.LoginService.ipAddress;
          console.log("berfooooooo", this.model);

          this.ApiMethods.postresultservice(this.ApiService.signupurl, this.model).subscribe(result => {
            console.log("resulllllttt__", result);
          },
             
          );
          

        }
        else {
          alert('Captcha Failed');
        }
      }
    }
 

  get loginIdMobile() { return this.PasswordRecoveryForm.get('loginIdMobile') }
  get Mobile() { return this.PasswordRecoveryForm.get('Mobile') }
  get Captcha() { return this.PasswordRecoveryForm.get('Captcha') }
}
