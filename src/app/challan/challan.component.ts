import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface IStudent {
    name: string;
    gender: string;
    country: string;
  }
@Component({
  selector: 'app-challan',
  templateUrl: './challan.component.html',
  styleUrls: ['./challan.component.css']
})

export class ChallanComponent implements OnInit {
    students=  [
        {
            id: 1,
            Grn: "25412521",
            ChallanDate: "12/02/2022",
            Status:"Pending",
            PaymentType: "Online",
            Amount: "16.00",
            Verify:"Verify"
        },
        {
            id: 2,
            Grn: "25412522",
            ChallanDate: "12/02/2022",
            Status:"Pending",
            PaymentType: "Online",
            Amount: "16.00",
            Verify:"Verify"
        },
        {
            id: 3,
            Grn: "25412523",
            ChallanDate: "12/02/2022",
            Status:"Pending",
            PaymentType: "Online",
            Amount: "16.00",
            Verify:""
        },
        {
            id: 4,
            Grn: "25412524",
            ChallanDate: "12/02/2022",
            Status:"Pending",
            PaymentType: "Online",
            Amount: "16.00",
            Verify:"Verify"
        },
        {
            id: 5,
            Grn: "25412525",
            ChallanDate: "12/02/2022",
            Status:"Pending",
            PaymentType: "Online",
            Amount: "16.00",
            Verify:""
        },
        {
            id: 6,
            Grn: "25412526",
            ChallanDate: "12/02/2022",
            Status:"Pending",
            PaymentType: "Online",
            Amount: "16.00",
            Verify:"Verify"
        },
        {
            id: 7,
            Grn: "25412527",
            ChallanDate: "12/02/2022",
            Status:"Pending",
            PaymentType: "Online",
            Amount: "16.00",
            Verify:""
        },

    ];
    searchString = '';
    searchName:''
  
    ngOnInit(): void {
    //   fetch('./assets/data/students.json').then(res => res.json())
    //     .then(json => {
    //         console.log("djjjjj",json);
            
    //       this.students = json;
    //     });
    }
  }


// import {Component, NgModule, ViewChild} from '@angular/core';
// import {BrowserModule} from '@angular/platform-browser';
// import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
// import {NgSelectModule, NgOption} from '@ng-select/ng-select';

// @Component({
//     selector: 'my-app',
//     template: `
       
        
//         <ng-select [items]="cities3"
//                    bindLabel="name"
//                    bindValue="name"
//                    placeholder="Select city"
//                    [(ngModel)]="selectedCityName">
           
//             <ng-template ng-label-tmp let-item="item">
//                 <img height="15" width="15" [src]="item.avatar"/>
//                 <b>{{item.name}}</b>
//             </ng-template>
//             <ng-template ng-option-tmp let-item="item" let-index="index">
//                 <img height="15" width="15" [src]="item.avatar"/>
//                 <b>{{item.name}}</b>
//             </ng-template>
            
//         </ng-select>
       
        
// `
// })
// export class ChallanComponent {

//     cities = [
//         {id: 1, name: 'Vilnius'},
//         {id: 2, name: 'Kaunas'},
//         {id: 3, name: 'Pavilnys', disabled: true},
//         {id: 4, name: 'Pabradė'},
//         {id: 5, name: 'Klaipėda'}
//     ];
    
//     cities2 = [
//         {id: 1, name: 'Vilnius'},
//         {id: 2, name: 'Kaunas'},
//         {id: 3, name: 'Pavilnys', disabled: true},
//         {id: 4, name: 'Pabradė'},
//         {id: 5, name: 'Klaipėda'}
//     ];
    
//     cities3 = [
//         {id: 1, name: 'Vilnius', avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'},
//         {id: 2, name: 'Kaunas', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'},
//         {id: 3, name: 'Pavilnys', avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'}
//     ];
    
//     cities4 = [];
    
//     users = [
//         {id: 'anjmao', name: 'Anjmao'},
//         {id: 'varnas', name: 'Tadeus Varnas'}
//     ];
    
//     selectedAccount = 'Adam'
//     accounts = [
//         { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' },
//         { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' },
//         { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' },
//         { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
//         { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador' },
//         { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador' },
//         { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador' },
//         { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia' },
//         { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia' },
//         { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia' }
//     ];

//     selectedCity: any;
//     selectedCityIds: string[];
//     selectedCityName = '';
//     selectedCityId: number;
//     selectedUserIds: number[];
    
//     constructor() {
//         this.create10kCities();
//     }
    
//     addCustomUser = (term) => ({id: term, name: term});
    
//     private create10kCities() {
//         this.cities4 = Array.from({length: 10000}, (value, key) => key)
//                             .map(val => ({
//                               id: val,
//                               name: `city ${val}`
//                             }));
//     }
// }

