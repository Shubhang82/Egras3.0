import { ApiMethods } from 'src/app/Component/Service/ApiMethods';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RecaptchaComponent, RecaptchaErrorParameters } from 'ng-recaptcha';
import { ILogin } from '../Interface/login';
// import { ApiService } from '../Service/utility.service';
import { ApiService } from 'src/app/Component/Service/utility.service';
import { Md5 } from 'node_modules/ts-md5';
import * as shajs from 'sha.js';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import * as Val from '../../Component/Utility/Validators/ValBarrel'

// const AUTH_API = 'http://172.22.32.105:8081/login';
export interface LoginAcc {
  userid: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  Logindata: MatTableDataSource<LoginAcc> = new MatTableDataSource();
  displayedColumns = [
    'userid',
    'password',
  ];
  // model: ILogin = {
  //   employeeID: '',
  //   shaPassword: '',
  //   ipAddress: 'http://10.130.34.224',
  //   randomNumber: '1029228785',
  //   password: '',
  // };

  model: ILogin = {
    userId: "",
    password: "",
    ipAddress: "10.23.65.235",
    rnd: ""
  };

  hash: any;
  randum: any;

  loginForm!: FormGroup;
  message!: string;
  New: any;
  loginflag: boolean = true;
  errormessage: any;
  id: any;
  loc: any;
  errorM: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private ApiMethods: ApiMethods, private ApiService: ApiService) {
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }
  ngOnInit() {

    // console.log(sessionStorage.getItem('loc'));
    // this.loginForm = this.formBuilder.group({
    //   userid: ['', [Validators.required]],
    //   password: ['', [Validators.required]],
    // });

    this.loginForm = new FormGroup({
      userid: new FormControl('', [Val.Required]),
      password: new FormControl('', [Val.Required, Val.PasswordStrengthValidator, Val.minLength(6)]),
    });

  }
  public getRandomInt(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  onsubmit() {
    // console.log("formmmmm__",form)
    //randum number genrate
    this.errorM = false

    this.randum = this.getRandomInt(1, 9999999999);

    // this.model.userId = this.loginForm.controls['user']
    console.log("randommm__dd", this.randum);

    this.model.userId = this.loginForm.controls['userid'].value;
    console.log("passworddd__data", this.loginForm.controls['password'].value);
    console.log("sha_222", shajs('sha256').update(this.loginForm.controls['password'].value).digest('hex'));

    this.model.rnd = this.randum
    //sha256 conversion
    this.New = (this.model.rnd + shajs('sha256').update(this.loginForm.controls['password'].value).digest('hex'))
    console.log("user__berfore_", this.New);
    this.model.password = shajs('sha256').update(this.New).digest('hex')

    console.log("aftervalue___", this.model);
    // this.LoginService.ipaddress();

    console.log(sessionStorage.getItem('loc'));
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log('Error');
      return;
    }
    else {
      alert()
      if (this.loginflag && this.loginForm.valid) {

        // this.model.ipAddress = this.LoginService.ipAddress;
        console.log("berfooooooo", this.model);
        this.ApiMethods.postresultservice(this.ApiService.loginurl, this.model).subscribe(result => {
          console.log("resulllllttt__", result.result.token);

          if (result.result.ErrorCode == 0) {
            this.errorM = false
            //  alert(result.errorCode + ' ' + result.userID + ' ' + result.treasuryName + ' ' + result.treasurycode + ' ' + result.userMobile );
            // this.id = result.userID;

            sessionStorage.setItem('token', result.result.token);
            // sessionStorage.setItem('loc', result.treasuryName);
            console.log(result);
            // console.log(this.model);
            // this.LoginService.loggedIn.next(true);
            // this.LoginService.user.next(sessionStorage.getItem('token') || '{}');
            // this.LoginService.TreName.next(sessionStorage.getItem('loc') || '{}');
            // this.router.navigate(['/Home']);
            this.router.navigate(['Profile']);

            //alert(result.message)

          }
          else {
            alert(result);
            this.message = 'Please check your userid and password';
          }
        },
          (error) => {
            console.log("errror message___", error);
            if (error.Error == -1) {
              alert("-1 change password required")
            }
            else if (error.Error == -2) {
              alert("-2 45 days exceed change password required")

            }
            else {
              this.errorM = true;
              this.errormessage = error;
            }


          });
        //   sessionStorage.setItem('token', this.loginForm.controls['userid'].value);

      }
      // else {
      //   alert('Captcha Failed');
      // }
    }

  }
  // public resolved(captchaResponse: string) {
  //   this.loginflag = true;
  //   //console.log(`Resolved captcha with response: ${captchaResponse}`); // Write your logic here about once human verified what action you want to perform 
  // }


  // this.router.navigate(['Challan']);
  // alert("hello")

  get userid() { return this.loginForm.get('userid') }
  get password() { return this.loginForm.get('password') }
}


  // public onError(errorDetails: RecaptchaErrorParameters): void {
  //   this.loginflag = false;
  //   alert('error');
  //   //console.log(`Recaptcha error encountered; details:`, errorDetails);
  // }


