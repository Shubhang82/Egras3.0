import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
// import { RecaptchaComponent, RecaptchaErrorParameters } from 'ng-recaptcha';
import { ISignup, Icheckuser } from '../Interface/signup';
import { ApiService } from 'src/app/Component/Service/utility.service';
import { ApiMethods } from 'src/app/Component/Service/ApiMethods';
import { Md5 } from 'node_modules/ts-md5';
import * as shajs from 'sha.js';
import { List } from '../../Component/ListDrop'
import * as Val from '../../Component/Utility/Validators/ValBarrel'
import { MatTableDataSource } from '@angular/material/table';
import { passwordMatch } from '../../Component/Utility/Validators/ValBarrel';

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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css',]
})
export class SignupComponent implements OnInit {
  PDAccdata: MatTableDataSource<PDAcc> = new MatTableDataSource();
  displayedColumns = [
    'userid',
    'password',
    'confirm',
    'first',
    'last',
    'dob',
    'address',
    'city',
    'state',
    'country',
    'mobile',
    'pincode',
    'email',
    'tin',
    'answer'
  ];

  model: ISignup = {
    loginId: "",
    firstName: "",
    lastName: "",
    gender: "male",
    dob: "",
    address: "",
    city: "",
    state: "Select State",
    country: "Select Country",
    mobilePhone: "",
    pinCode: "",
    email: "",
    password: "",
    dept: "01",
    userType: 10,
    questionId: 2,
    question: "Select Your Security Question",
    maritalStatus: "single",
    identity: null,
    verificationCode: null,
    getvCode: null,
    attemptNumber: 0,
    userId: null
  };
  checkuser: Icheckuser = {
    userId: "",
    mobileNo: "",
  };
  valErrorM = {
    country: "",
    state: "",
    // city: "",
    question: "",
  };
  valError = {
    country: false,
    state: false,
    // city: false,
    question: false,
  };
  hash: any;
  loginForm!: any;
  message!: string;
  userflag: boolean
  New: any;
  Cflag: boolean = true;
  loginflag: boolean = true;
  errormessage: any;
  id: any;
  loc: any;
  randum!: string;
  Select_Question: any;
  Select_State: any;
  Select_Country: any;
  Country: any = []
  State: any = []
  Question: any = []
  displayStyle = "none";

  constructor(private formBuilder: FormBuilder, private router: Router, private ApiMethods: ApiMethods, private ApiService: ApiService, private List: List) {
    history.pushState(null, '', location.href);
    window.onpopstate = function () {
      history.go(1);
    };

    // State api call
    this.ApiMethods.getservice(this.ApiService.getstate).subscribe(resp => {
      console.log("resulllllttt__", resp.result);
      this.State = resp.result
    });

  }
  ngOnInit() {
    // try {
    // console.log(sessionStorage.getItem('loc'));
    // this.loginForm = this.formBuilder.group({
    //   userid: ['', Validators.required],

    //   password: ['', Validators.required],
    //   // email: ['', Validators.required, Validators.email],

    // });

    // this.City = this.List.onCity()
    this.Country = this.List.onCountry()
    this.State = this.List.onState()
    this.Question = this.List.onQuestion()


    this.loginForm = new FormGroup({
      userid: new FormControl('', [Val.Required, Val.SpecialChar,]),
      email: new FormControl('', [Val.Required, Val.ValidEmail]),
      // password: new FormControl('', [Val.Required, Val.PasswordStrengthValidator, Val.minLength(6)]),
      password: new FormControl(null, [
        (c: AbstractControl) => Validators.required,
        Validators.pattern(
          /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!*#=~_-])/
        ), Val.minLength(6),

      ]),
      // confirm: new FormControl('', [Val.Required, Val.PasswordStrengthValidator]),
      confirm: new FormControl(null, [
        (c: AbstractControl) =>
          Validators.pattern(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!*#=~_-])/
          ),
      ]),
      first: new FormControl('', [Val.Required, Val.Alphabet, Val.maxLength(25)]),
      last: new FormControl('', [Val.Required, Val.Alphabet, Val.maxLength(25)]),
      dob: new FormControl('', [Val.Required]),
      address: new FormControl('', [Val.Required, Val.maxLength(30)]),
      mobile: new FormControl('', [Val.Required, Val.Numeric, Val.minLength(10), Val.maxLength(10), Val.StartWith0]),
      pincode: new FormControl('', [Val.Required, Val.minLength(6), Val.Numeric, Val.maxLength(6), Val.StartWith0]),
      tin: new FormControl('', [Val.Required]),
      answer: new FormControl('', [Val.Required, Val.maxLength(30)]),
      city: new FormControl('', [Val.Required, Val.maxLength(20), Val.minLength(4), Val.Alphabet])
    });
    // this.loginForm.addValidators(
    //   )
    // );
  }

  public getRandomInt(min: any, max: any) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



  selectCountry(data: any) {
    this.Cflag = false
    console.log("Country___", data.target.value);
    this.model.country = data.target.value;
    this.valError.country = false;
  }
  onpress() {
    alert('helloo')
  }
  selectState(data: any) {
    console.log("state__", data.target.value);
    this.model.state = data.target.value;
    this.valError.state = false;

  }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  selectQuestion(data: any) {
    console.log("question___", data.target.value);
    this.model.question = data.target.value;
    this.valError.question = false;
  }
  checkUser() {
    console.log("userfalg hecllllll________", this.userflag);

    if (!this.loginForm.controls['userid'].value) {
      alert('Please enter LoginId to check availablity')
    }
    else {
      // alert('old')
      this.checkuser.userId = this.loginForm.controls['userid'].value;
      console.log("berfooooooo", this.checkuser);

      this.ApiMethods.postresultservice(this.ApiService.check_User, this.checkuser).subscribe(resp => {
        console.log("resulllllttt__", resp);

        if (!resp.result.User) {

          this.userflag = resp.result.User
          alert("not register")

        }
        else {
          this.userflag = resp.result.User
          alert("register already");
          // this.message = 'Please check your userid and password';
        }
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

  }

  onsubmit() {
    if (this.model.country === "Select Country") {
      this.valError.country = true
      this.valError.state = false
      this.valError.question = false
      this.valErrorM.country = "Please Select Country"
    }
    else if (this.model.state === "Select State") {
      this.valError.country = false
      this.valError.state = true
      this.valError.question = false
      this.valErrorM.state = "Please Select State"
    }
    else if (this.model.question === "Select Your Security Question") {
      this.valError.country = false
      this.valError.state = false
      this.valError.question = true
      this.valErrorM.question = "Please Select Your Security Question"
    }
    else {
      // this.valError = false
      // console.log("formmmmm__", this.loginForm.controls['city'].value)
      //randum number genrate
      this.valError.country = false;
      this.valError.state = false;
      // this.valError.city = false;
      this.valError.question = false;

      this.randum = this.getRandomInt(1, 9999999999);

      this.model.loginId = this.loginForm.controls['userid'].value;
      this.model.email = this.loginForm.controls['email'].value;
      this.model.firstName = this.loginForm.controls['first'].value;
      this.model.lastName = this.loginForm.controls['userid'].value;
      this.model.dob = this.loginForm.controls['dob'].value;
      this.model.address = this.loginForm.controls['address'].value;
      this.model.city = this.loginForm.controls['city'].value;
      // this.model.state = this.loginForm.controls['state'].value;
      // this.model.country = this.loginForm.controls['country'].value;
      this.model.mobilePhone = this.loginForm.controls['mobile'].value;
      this.model.pinCode = this.loginForm.controls['pincode'].value;


      //sha256 conversion
      // this.New = (this.randum + shajs('sha256').update(this.loginForm.controls['password'].value).digest('hex'))
      // console.log("user__berfore_", this.New);
      this.model.password = shajs('sha256').update(this.loginForm.controls['password'].value).digest('hex')

      console.log("aftervalue___", this.model);
      // this.LoginService.ipaddress();

      console.log(sessionStorage.getItem('loc'));
      // stop here if form is invalid
      if (this.loginForm.invalid) {
        console.log('Error');
        return;
      }
      else {
        // alert(this.loginForm.valid);
        if (this.loginflag && this.loginForm.valid) {

          // this.model.ipAddress = this.LoginService.ipAddress;
          console.log("berfooooooo", this.model);

          this.ApiMethods.postresultservice(this.ApiService.signupurl, this.model).subscribe(result => {
            console.log("resulllllttt__", result);

            if (result) {
              //  alert(result.errorCode + ' ' + result.userID + ' ' + result.treasuryName + ' ' + result.treasurycode + ' ' + result.userMobile );
              // this.id = result.userID;

              // sessionStorage.setItem('loc', result.treasuryName);
              console.log(result);
              // console.log(this.model);
              // this.LoginService.loggedIn.next(true);
              // this.LoginService.user.next(sessionStorage.getItem('token') || '{}');
              // this.LoginService.TreName.next(sessionStorage.getItem('loc') || '{}');
              this.router.navigate(['']);

              //alert(result.message)

            }
            else {
              alert(result);
              this.message = 'Please check your userid and password';
            }
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


  }


  // public onError(errorDetails: RecaptchaErrorParameters): void {
  //   this.loginflag = false;
  //   alert('error');
  //   //console.log(`Recaptcha error encountered; details:`, errorDetails);
  // }
  get mobile() { return this.loginForm.get('mobile') }
  get userid() { return this.loginForm.get('userid') }
  get first() { return this.loginForm.get('first') }
  get last() { return this.loginForm.get('last') }
  get dob() { return this.loginForm.get('dob') }
  get address() { return this.loginForm.get('address') }
  get confirm() { return this.loginForm.get('confirm') }
  get city() { return this.loginForm.get('city') }
  get state() { return this.loginForm.get('state') }
  get country() { return this.loginForm.get('country') }
  get pincode() { return this.loginForm.get('pincode') }
  get email() { return this.loginForm.get('email') }
  get tin() { return this.loginForm.get('tin') }
  get password() { return this.loginForm.get('password') }
  get answer() { return this.loginForm.get('answer') }

}
function matchValidator(
  control: AbstractControl,
  controlTwo: AbstractControl
): ValidatorFn {
  return () => {
    if (control.value !== controlTwo.value)
      return { match_error: 'Value does not match' };
    return null;
  };
}