// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';

// @Injectable()
// export class HttpClient_ {

//   constructor(private http: HttpClient) {}

//   createAuthorizationHeader(headers: HttpHeaders) {
//     headers.append('Authorization', 'Basic ' +
//       btoa('username:password')); 
//   }

//   get(url) {
//     let headers = new Headers();
//     this.createAuthorizationHeader(headers);
//     return this.http.get(url, {
//         headers: headers
//     });
//   }

//   post(url, data) {
//     let headers = new Headers();
//     this.createAuthorizationHeader(headers);
//     return this.http.post(url, data, {
//         headers: headers
//     });
//   }
// }