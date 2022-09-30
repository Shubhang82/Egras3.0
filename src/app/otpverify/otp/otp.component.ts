import { Component, OnInit,ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ApiService } from 'src/app/Component/Service/utility.service';
import { ApiMethods } from 'src/app/Component/Service/ApiMethods';
import { Md5 } from 'node_modules/ts-md5';
import * as shajs from 'sha.js';
import { List } from '../../Component/ListDrop'
import * as Val from '../../Component/Utility/Validators/ValBarrel'
import { MatTableDataSource } from '@angular/material/table';
import { IOtp } from '../Interface/signup';

export interface OtpV {
  otp: string;
}
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  // styleUrls: ['./otp.component.css']
   styleUrls: ['../../Component/style.css']
})
export class OtpComponent implements OnInit {

  title = 'otp';
  OtpForm: FormGroup;
  formInput = ['input1', 'input2', 'input3', 'input4', 'input5', 'input6'];
  @ViewChildren('formRow') rows: any;

  ngOnInit() {

  }

  // constructor(private Router: Router ) {
  //   this.OtpForm = this.toFormGroup(this.formInput);
  // }

  constructor(private formBuilder: FormBuilder, private router: Router, private ApiService: ApiService, private ApiMethods: ApiMethods, ) 
  {
    this.OtpForm = this.toFormGroup(this.formInput);

  }

  toFormGroup(elements) {
    const group: any = {};

    elements.forEach(key => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }

  keyUpEvent(event, index) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
      pos = index - 1 ;
    } else {
      pos = index + 1 ;
    }
    if (pos > -1 && pos < this.formInput.length ) {
      this.rows._results[pos].nativeElement.focus();
    }

  }

  onSubmit() {
    console.log("Hello OTP_Form",this.OtpForm.value);
    // this.Router.navigate(['passwordrecovery']);

 
      if (this.OtpForm.invalid) {
        console.log('Error');
        return;
      }
      else {
        // alert(this.loginForm.valid);
        if (this.OtpForm.valid) 
        {

            // this.model.ipAddress = this.LoginService.ipAddress;
            console.log("OTP_Form is Valid", this.OtpForm);

            this.ApiMethods.postresultservice(this.ApiService.otpurl, this.OtpForm).subscribe(result => {
              console.log("result-OTP", result);
             // this.router.navigate(['ChangePassword']);
          })
         }
        else {
          alert('Captcha Failed');
        }
      }
  }

  onBack() {
    this.router.navigate(['PasswordRecovery']);
  }

  // PDAccdata: MatTableDataSource<OtpV> = new MatTableDataSource();
  // displayedColumns = [
  //   'otp',
  // ];

  // model: IOtp = {
  //   otp: "",
  // };
  // hash: any;
  // message!: string;
  // New: any;
  // Cflag: boolean = true;
  // otpflag: boolean = true;
  // errormessage: any;
  // id: any;
  // loc: any;
  // OtpForm: FormGroup
  // // errorM: boolean = false;
  // randum!: string;
  // displayStyle = "none";
  // constructor(private formBuilder: FormBuilder, private router: Router, private ApiMethods: ApiMethods, private ApiService: ApiService, private List: List) {
  //   history.pushState(null, '', location.href);
  //   window.onpopstate = function () {
  //     history.go(1);
  //   };
  // }
  // ngOnInit() {

  //   this.OtpForm = new FormGroup({
  //     // password: new FormControl('', [Val.Required, Val.PasswordStrengthValidator, Val.minLength(6)]),
  //     password: new FormControl(null, [
  //       (c: AbstractControl) => Validators.required,
  //       Validators.pattern(
  //         /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!*#=~_-])/
  //       ), Val.minLength(6),
  //       // Val.Required,
  //     ]),
  //     confirm: new FormControl('', [Val.Required]),
  //   }
  //   );
  // }
  // public getRandomInt(min: any, max: any) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  // openPopup() {
  //   this.displayStyle = "block";
  // }
  // closePopup() {
  //   this.displayStyle = "none";
  // }

  // checkUser() {
  //   alert('User Available')
  // }

  // onsubmit() {

  //   this.randum = this.getRandomInt(1, 9999999999);
  //   // stop here if form is invalid
  //   if (this.OtpForm.invalid) {
  //     console.log('Error');
  //     return;
  //   }
  //   else {
  //     if (this.otpflag && this.OtpForm.valid) {

  //       console.log("berfooooooo", this.model);

  //       // this.ApiMethods.postresultservice(this.ApiService.otpurl, this.model).subscribe(result => {
  //       //   console.log("resulllllttt__", result);
  //       // },
  //       // );

  //     }
  //     else {
  //       alert('Captcha Failed');
  //     }
  //   }
  // }
  // get password() { return this.OtpForm.get('otp') }

}


