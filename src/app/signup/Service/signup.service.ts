import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const MINUTES_UNITL_AUTO_LOGOUT = 10 // in mins
const CHECK_INTERVAL = 15000 // in ms
const STORE_KEY = 'lastAction';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  public getLastAction() {
    return parseInt(localStorage.getItem(STORE_KEY) || '{}');
  }
  public setLastAction(lastAction: number) {
    localStorage.setItem(STORE_KEY, lastAction.toString());
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // loginurl = "http://10.130.34.224/APITreasLoginPublish/Login";
  hash: any;
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public user: BehaviorSubject<string> = new BehaviorSubject<string>(sessionStorage.getItem('token') || '{}');
  public TreName: BehaviorSubject<string> = new BehaviorSubject<string>(sessionStorage.getItem('loc') || '{}');
  public ipAddress: any;
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

  postresultservice(loginurl: any, data: any) {
    console.log("apidetails__",loginurl,data);
    

    //return this.http.post(this.loginurl,data,this.httpOptions).pipe(catchError(this.handleError));//('postresultservice',data)
    return this.http.post(loginurl, data, this.httpOptions).
      pipe(
        map((data: any) => {

          return data
        }),
        catchError(this.handleError));//('postresultservice',data)
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
  private handleError(error: HttpErrorResponse) {
    console.log("erorr have",error);

    let errormessage = ''
    if (error.status === 0) {
      // A client-side or network error occurred  . Handle it accordingly.
      console.error('An error occurred:', error.error);
      return throwError(() => new Error('Sorry some technical issuse , please try again !'))
    }
    else if (error.status === 2) {
      errormessage += 'User ID Blocked , please try again after 30 Minutes or contact to Administrator !'
      return throwError(() => new Error(errormessage));
    }
    else if (error.status == 400) {
      errormessage += JSON.stringify(error.error.message);
      return throwError(() => new Error("invalid username or password"));
    }
    else {
      errormessage += 'Sorry some technical issuse , please try again !'
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      //console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errormessage));

  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  get username() {
    return this.user.asObservable();
  }
  get LocName() {
    return this.TreName.asObservable();
  }
}
