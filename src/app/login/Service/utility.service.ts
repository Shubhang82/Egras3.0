import { Injectable } from '@angular/core';

const Baseurl = 'http://172.22.32.105:8081/';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    public loginurl: string = Baseurl + "login";
    //   public TreName: BehaviorSubject<string> = new BehaviorSubject<string>(sessionStorage.getItem('loc') || '{}');


}
