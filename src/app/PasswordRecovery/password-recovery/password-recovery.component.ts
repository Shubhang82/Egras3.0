import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as Val from '../../Component/Utility/Validators/ValBarrel'
import { MatTableDataSource } from '@angular/material/table';
import { IPasswordRecovery } from '../Interface/password-recovery';
import { ApiService } from '../Service/utility.service';

export interface PasswordRevocery {
  LoginIdMobile: string;
  Captcha: string;
}


@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {


  PasswordRevocerydata: MatTableDataSource<PasswordRevocery> = new MatTableDataSource();
  displayedColumns = [
    'LoginIdMobile',
    'Captcha'
  ];


  model: IPasswordRecovery = {
    loginIdMobile: "", 
    Captcha: ""

  };

  hash: any;
  PasswordRecoveryForm!: any;
  message!: string;

  // constructor() { }

  // constructor(private formBuilder: FormBuilder, private router: Router, private PasswordRecoveryService: PasswordRecoveryService, private ApiService: ApiService, private List: List) { }
  constructor(private formBuilder: FormBuilder, private router: Router, private ApiService: ApiService ) { }
  
  isVisible: number=1;
  isSelected: boolean = true;

  ngOnInit(): void {

    this.PasswordRecoveryForm = new FormGroup({
    loginIdMobile: new FormControl('', [Val.Required]),
    Captcha: new FormControl('', [Val.Required]),
    });
  }
  onsubmit() {

    this.model.loginIdMobile = this.PasswordRecoveryForm.controls['loginIdMobile'].value;
    this.model.Captcha = this.PasswordRecoveryForm.controls['Captcha'].value;


  }
}
