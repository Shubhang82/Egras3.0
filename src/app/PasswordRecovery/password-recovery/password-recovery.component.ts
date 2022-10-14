import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as Val from '../../Component/Utility/Validators/ValBarrel'
import { MatTableDataSource } from '@angular/material/table';
import { IPasswordRecovery } from '../Interface/password-recovery';
import { ApiService } from 'src/app/Component/Service/utility.service';
import { ApiMethods } from 'src/app/Component/Service/ApiMethods';
import { Location } from '@angular/common'
export interface PasswordRevocery {
  userId: string;
}


@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  // styleUrls: ['./password-recovery.component.css']
  styleUrls: ['../../Component/style.css']
})
export class PasswordRecoveryComponent implements OnInit {


  PasswordRevocerydata: MatTableDataSource<PasswordRevocery> = new MatTableDataSource();
  displayedColumns = [
    'userId'
  ];


  model: IPasswordRecovery = {
    userId: ""
  };

  hash: any;
  PasswordRecoveryForm!: any;
  message!: string;
  loginflag: boolean = true;
  errormessage: any;
  errorM: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private ApiService: ApiService, private ApiMethods: ApiMethods, private loc: Location) {
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }

  isVisible: number = 1;
  isSelected: boolean = true;

  ngOnInit() {

    this.PasswordRecoveryForm = new FormGroup({
      loginIdMobile: new FormControl('', [Val.Required]),
      // Mobile: new FormControl('', [Val.Required]),      // Temp Comment
      Captcha: new FormControl('', [Val.Required]),

    });


  }
  back(): void {
    this.loc.back()
  }

  onsubmit() {
    this.model.userId = this.PasswordRecoveryForm.controls['loginIdMobile'].value;

    // stop here if form is invalid
    if (this.PasswordRecoveryForm.invalid) {
      console.log('Error');
      return;
    }
    else {
      // alert(this.loginForm.valid);
      if (this.loginflag && this.PasswordRecoveryForm.valid) {
        this.errorM = false;

        // this.model.ipAddress = this.LoginService.ipAddress;
        console.log("PasswordRecovery_Form is Valid", this.model);

        this.ApiMethods.postresultservice(this.ApiService.PasswordRecoveryurl, this.model).subscribe(result => {
          console.log("result-PasswordRecovery", result);
          if (result) {
            localStorage.setItem('user_ID', result.result.UserId);
            localStorage.setItem('Login_ID', this.model.userId);

            this.router.navigate(['OtpVerify']);
          }
          else {
            alert("Something went wrong")
          }
        },
          (error) => {
            console.log("errror message___", error);
            let result = error.error.result.ErrorCode
            this.errorM = true;
            if (result === 1) {
              this.errormessage = 'User not found !'
            }
            else {
              this.errormessage = 'Sorry some technical issuse , please try again !'
            }
          });
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
