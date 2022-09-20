import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import {LoginModule} from '../login/login/login.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    LoginModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class DefaultModule { }
