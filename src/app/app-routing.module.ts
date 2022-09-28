import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallanComponent } from './challan/challan.component';
import { SignupComponent } from './signup/signup/signup.component';
import { ChangePasswordComponent } from './ChangePassword/change-password/change-password.component';
import { PasswordRecoveryComponent } from './PasswordRecovery/password-recovery/password-recovery.component';
import { OtpComponent } from './otpverify/otp/otp.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login/login-routing.module').then(m => m.LoginRoutingModule) },
  { path: 'Challan', component: ChallanComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'OtpVerify', component: OtpComponent },
  { path: 'ChangePassword', component: ChangePasswordComponent },
  // { path: '', loadChildren: () => import('./default/default-routing.module').then(m => m.DefaultRoutingModule) },
  {path: 'PasswordRecovery', component: PasswordRecoveryComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

