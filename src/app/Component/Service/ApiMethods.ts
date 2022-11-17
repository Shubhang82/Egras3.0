import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import axios from 'axios';
const MINUTES_UNITL_AUTO_LOGOUT = 10 // in mins
const CHECK_INTERVAL = 15000 // in ms
const STORE_KEY = 'lastAction';

@Injectable({
  providedIn: 'root'
})
export class ApiMethods {

  public getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY) || '{}');
  }
  public setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }



  hash: any;
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public auth_token: BehaviorSubject<string> = new BehaviorSubject<string>(sessionStorage.getItem('token'));
  public TreName: BehaviorSubject<string> = new BehaviorSubject<string>(sessionStorage.getItem('loc') || '{}');
  public ipAddress: any;
  // public token
  constructor(private router: Router, private http: HttpClient) {
    this.check();
    this.initListener();
    this.initInterval();
    localStorage.setItem(STORE_KEY, Date.now().toString());
  }

  ///*** auto logout code ***/// 
  initListener() {
    document.body.addEventListener('click', () => this.reset());
    document.body.addEventListener('mouseover', () => this.reset());
    document.body.addEventListener('mouseout', () => this.reset());
    document.body.addEventListener('keydown', () => this.reset());
    document.body.addEventListener('keyup', () => this.reset());
    document.body.addEventListener('keypress', () => this.reset());
  }
  reset() {
    this.setLastAction(Date.now());
  }

  initInterval() {
    setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  check() {
    const now = Date.now();
    const timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
    const diff = timeleft - now;
    const isTimeout = diff < 0;

    if (isTimeout) {
      this.logout();
    }
  }
  ///*** Service call for login ***///   
  //  postresultservice(data: any)
  //  {

  //    //return this.http.post(this.loginurl,data,this.httpOptions).pipe(catchError(this.handleError));//('postresultservice',data)
  //    return this.http.post(this.loginurl,data,this.httpOptions).
  //    pipe(
  //        map((data:any)=>{

  //          return data}),
  //        catchError(this.handleError));//('postresultservice',data)
  //  }

  // header = new HttpHeaders().set(
  //   "Authorization",
  //   'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3MTAiLCJVc2VySWQiOiI3MTAiLCJleHAiOjE2NjUzODQ1NjgsIlVzZXJUeXBlIjoiMTAiLCJpYXQiOjE2NjUzODM2Njh9.CDlHZI2UpFUocny9zCyx6Wwe-bjxqaXwe-hDAPTBgjmriihVu54cHL6wAS7t_09pD5LeHP-a0eCyfQZqlmB6-Q'
  // );


  postresultservice(url: any, data: any) {
    // let token = localStorage.getItem('token');
    let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3MTAiLCJVc2VySWQiOiI3MTAiLCJleHAiOjE2Njk0OTE2ODAsIlVzZXJUeXBlIjoiMTAiLCJpYXQiOjE2Njg1OTE2ODB9._u0EBF5hj2OqJNFZSaxEMm9uHqZ-HBj3_fo6QZ9OPY-f5o-9DiL3vtSs-UFxi9euLfGclkXkhDablQNteUWLoA';

    let Options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }),
    };
    //return this.http.post(this.loginurl,data,this.httpOptions).pipe(catchError(this.handleError));//('postresultservice',data)
    return this.http.post(url, data, Options).
      pipe(
        map((data: any) => {

          return data
        }))
    // catchError(this.handleError));//('postresultservice',data)
  }


  getservice(url: any) {
    let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3MTAiLCJVc2VySWQiOiI3MTAiLCJleHAiOjE2Njk0OTE2ODAsIlVzZXJUeXBlIjoiMTAiLCJpYXQiOjE2Njg1OTE2ODB9._u0EBF5hj2OqJNFZSaxEMm9uHqZ-HBj3_fo6QZ9OPY-f5o-9DiL3vtSs-UFxi9euLfGclkXkhDablQNteUWLoA';
    // let token = localStorage.getItem('token');

    console.log("token_____", token);
    let httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
    };
    console.log("hhhhhhhhhh__", httpOptions,url);
    return this.http.get(url, httpOptions).
      pipe(
        map((data: any) => {

          return data
        }))
    // catchError(this.handleError));//('postresultservice',data)

  }

  ipaddress() {
    this.http.get("https://jsonip.com").subscribe((res: any) => {
      this.ipAddress = res.ip;
      console.log('res.ip');
    });
  }
  ///*** logout call ***///   
  logout(): void {
    this.loggedIn.next(false);
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('loc');
    this.router.navigate(['']);
  }

  ///*** Error Handel ***///   
  // private handleError(error: HttpErrorResponse) {
  //   console.log("eroroomessage__", error);
  //   var result = error.error.result.ErrorCode

  //   let errormessage = ''
  //   if (result === 0) {
  //     // A client-side or network error occurred  . Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //     return throwError(() => new Error('Sorry some technical issuse , please try again !'))
  //   }
  //   else if (result === 1) {
  //     errormessage += 'User not found !'
  //     return throwError(() => new Error(errormessage));
  //   }
  //   else if (result === 2) {
  //     errormessage += 'Login attempt more than 5 !'
  //     return throwError(() => new Error(errormessage));
  //   }
  //   else if (result === 3) {
  //     errormessage += 'Password not match !'
  //     return throwError(() => new Error(errormessage));
  //   }
  //   else if (result == -1) {
  //     // errormessage += JSON.stringify(error.error.message);
  //     return throwError(() => new Error(result));
  //   }
  //   else if (result == -2) {
  //     // errormessage += JSON.stringify(error.error.message);
  //     return throwError(() => new Error(result));
  //   }
  //   else {
  //     errormessage += 'Sorry some technical issuse , please try again !'
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     //console.error(`Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error(errormessage));

  // }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  // get username() {
  //   return this.user.asObservable();
  // }
  get LocName() {
    return this.TreName.asObservable();
  }
}
