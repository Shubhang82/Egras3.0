import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { RecaptchaComponent, RecaptchaErrorParameters } from 'ng-recaptcha';
import { IChangePassword } from '../Interface/changepassword';
import { ApiService } from 'src/app/Component/Service/utility.service';
import { ApiMethods } from 'src/app/Component/Service/ApiMethods';
import { Md5 } from 'node_modules/ts-md5';
import * as shajs from 'sha.js';
import { List } from '../../Component/ListDrop'
import * as Val from '../../Component/Utility/Validators/ValBarrel'
import { MatTableDataSource } from '@angular/material/table';

export interface PDAcc {
  userid: string;
  first: string;
  last: string;
  dob: string;
  address: string;
  confirm: string;
  city: string;
  state: string;
  country: string;
  mobile: string;
  pincode: string;
  email: string;
  tin: string;
  password: string;
  question: string;
  answer: string;
}
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  PDAccdata: MatTableDataSource<PDAcc> = new MatTableDataSource();
  displayedColumns = [
    'password',
    'confirm',
  ];

  model: IChangePassword = {
    password: "",
    rnd: "",
    ipAddress: ""
  };
  hash: any;
  ChangePwdForm!: any;
  message!: string;
  New: any;
  Cflag: boolean = true;
  loginflag: boolean = true;
  errormessage: any;
  id: any;
  loc: any;
  // errorM: boolean = false;
  randum!: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private ApiMethods: ApiMethods, private ApiService: ApiService, private List: List) { }
  ngOnInit() {

    this.ChangePwdForm = new FormGroup({
      password: new FormControl('', [Val.Required, Val.PasswordStrengthValidator, Val.minLength(6)]),
      confirm: new FormControl('', [Val.Required]),
    }
    // Val.mustMatch('password', 'confirmPassword') // insert here
    // , {
    //   validators: this.MustMatch('password', 'confirm')
    // }
    );
  }
  public getRandomInt(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  checkUser() {
    alert('hello')
  }



  // MustMatch(controlName: string, matchingControlName: string) {
  //   return (formGroup: FormGroup) => {
  //     const control = formGroup.controls[controlName];
  //     const matchingControl = formGroup.controls[matchingControlName];

  //     if (matchingControl.errors && !matchingControl.errors?.['MustMatch']) {
  //       return;
  //     }

  //     // set error on matchingControl if validation fails
  //     if (control.value !== matchingControl.value) {
  //       matchingControl.setErrors({ mustMatch: true });
  //     } else {
  //       matchingControl.setErrors(null);
  //     }
  //     // return null;
  //   };
  // }
  // passwordMatch(password: string, confirmPassword: string): ValidatorFn {
  //   return (formGroup: AbstractControl): { [key: string]: any } | null => {
  //     const passwordControl = formGroup.get(password);
  //     const confirmPasswordControl = formGroup.get(confirmPassword);

  //     if (!passwordControl || !confirmPasswordControl) {
  //       return null;
  //     }

  //     if (
  //       confirmPasswordControl.errors &&
  //       !confirmPasswordControl.errors?.['passwordMismatch']
  //     ) {
  //       return null;
  //     }

  //     if (passwordControl.value !== confirmPasswordControl.value) {
  //       confirmPasswordControl.setErrors({ passwordMismatch: 'Confirm Password should be same as password' });
  //       return { passwordMismatch: 'Confirm Password should be same as password' };
  //     } else {
  //       confirmPasswordControl.setErrors(null);
  //       return null;
  //     }
  //   };
  // }

  onsubmit() {

    this.randum = this.getRandomInt(1, 9999999999);



    //sha256 conversion
    this.New = (this.randum + shajs('sha256').update(this.ChangePwdForm.controls['password'].value).digest('hex'))
    console.log("user__berfore_", this.New);
    this.model.password = shajs('sha256').update(this.New).digest('hex')

    console.log("aftervalue___", this.model);
    // this.LoginService.ipaddress();

    console.log(sessionStorage.getItem('loc'));
    // stop here if form is invalid
    if (this.ChangePwdForm.invalid) {
      console.log('Error');
      return;
    }
    else {
      // alert(this.loginForm.valid);
      if (this.loginflag && this.ChangePwdForm.valid) {

        // this.model.ipAddress = this.LoginService.ipAddress;
        console.log("berfooooooo", this.model);

        this.ApiMethods.postresultservice(this.ApiService.signupurl, this.model).subscribe(result => {
          console.log("resulllllttt__", result);

          // if (result) {
          //   this.errorM = false
          //   //  alert(result.errorCode + ' ' + result.userID + ' ' + result.treasuryName + ' ' + result.treasurycode + ' ' + result.userMobile );
          //   // this.id = result.userID;

          //   sessionStorage.setItem('token', result.result.token);
          //   // sessionStorage.setItem('loc', result.treasuryName);
          //   console.log(result);
          //   // console.log(this.model);
          //   // this.LoginService.loggedIn.next(true);
          //   // this.LoginService.user.next(sessionStorage.getItem('token') || '{}');
          //   // this.LoginService.TreName.next(sessionStorage.getItem('loc') || '{}');
          //   // this.router.navigate(['/Home']);
          //   this.router.navigate(['Challan']);

          //   //alert(result.message)

          // }
          // else {
          //   alert(result);
          //   this.message = 'Please check your userid and password';
          // }
        },
          // (error) => {
          //   console.log("errror message___", error);
          //   if (error.Error == -1) {
          //     alert("-1 change password required")
          //   }
          //   else if (error.Error == -2) {
          //     alert("-2 45 days exceed change password required")

          //   }
          //   else {
          //     this.errorM = true;
          //     this.errormessage = error;
          //   }


          // }
        );
        //   sessionStorage.setItem('token', this.loginForm.controls['userid'].value);

      }
      else {
        alert('Captcha Failed');
      }
    }



  }

  // public resolved(captchaResponse: string) {
  //   try {
  //     this.loginflag = true;
  //   }
  //   catch (expect) {
  //     alert('web service error');
  //   }
  //   //console.log(`Resolved captcha with response: ${captchaResponse}`); // Write your logic here about once human verified what action you want to perform 
  // }



  // public onError(errorDetails: RecaptchaErrorParameters): void {
  //   this.loginflag = false;
  //   alert('error');
  //   //console.log(`Recaptcha error encountered; details:`, errorDetails);
  // }
  get password() { return this.ChangePwdForm.get('password') }
  get confirm() { return this.ChangePwdForm.get('confirm') }

}

