import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthGuard} from '../Guard/auth.guard'
// Material Layout
import { MatCardModule } from '@angular/material/card';
// Material Form Controls
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field'

// import { LoginRoutingModule } from './login-routing.module';
// import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { RecaptchaModule } from 'ng-recaptcha';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    // LoginRoutingModule,
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
  ],
  providers: [AuthGuard], 
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
