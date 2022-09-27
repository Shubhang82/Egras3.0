import { Injectable } from '@angular/core';

const Baseurl = 'http://172.22.32.105:8082/';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    public loginurl: string = Baseurl + "login";
    public signupurl: string = Baseurl + "user/save";
    public otpurl: string = Baseurl+ "otpverify";
    public getstate: string = Baseurl + 'getState';
    public  check_User : string =  Baseurl+ 'user/checkUserId'
}
