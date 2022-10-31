import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"; 
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class TokenInterceptorService implements HttpInterceptor {
    constructor() {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token:'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3MTAiLCJVc2VySWQiOiI3MTAiLCJleHAiOjE2NjU0Njk0ODUsIlVzZXJUeXBlIjoiMTAiLCJpYXQiOjE2NjU0Njg1ODV9.CfoucXaRs1zlScSAptwzJWUcTsFZJ11TZNpasQ7zG6FtZH7TdoMLdT4BGqQ73ufWWrqu3zlvEHxYskO35xmhwg'
        let jwttoken= req.clone({
            setHeaders: {
                Authorization: 'bearer ' + token
                // 'securitykey' : 'key123'
            }
        })
        return next.handle(jwttoken)
    }
}
