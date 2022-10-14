import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
// Material Layout
import { MatCardModule } from '@angular/material/card';
// Material Form Controls
import {MatInputModule } from '@angular/material/input';
import {MatRadioModule } from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'
 
import { RecaptchaModule } from 'ng-recaptcha';
import { ChallanComponent } from './challan.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    ChallanComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    RecaptchaModule,
    MatFormFieldModule,
    MatRadioModule,
    MaterialModule
  ],
  providers: [], 
  exports: [
    ChallanComponent
  ]
})
export class PasswordRecoveryModule { }