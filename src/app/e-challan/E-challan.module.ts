import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material Layout
import { MatCardModule } from '@angular/material/card';
// Material Form Controls
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'

import { EChallanComponent } from './e-challan.component';
import { EchallanRoutingModule } from './E-challan-routing.module';
import { RecaptchaModule } from 'ng-recaptcha';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    EChallanComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    EchallanRoutingModule,
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
  providers: [],
  exports: [
    EChallanComponent
  ]
})
export class EchallanModule { }
