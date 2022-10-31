import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallanComponent } from './challan/challan.component';
// import { HeaderComponent } from './Header/Header.component';
import { SignupComponent } from './signup/signup/signup.component';
import { ChangePasswordComponent } from './ChangePassword/change-password/change-password.component';
import { PasswordRecoveryComponent } from './PasswordRecovery/password-recovery/password-recovery.component';
import { OtpComponent } from './otpverify/otp/otp.component';
import { ProfileComponent } from './Profile/profile/profile.component';
import { CProfileComponent } from './CreateProfile/c-profile/c-profile.component';
import { ResetPasswordComponent } from './ResetPassword/rpassword/rpassword.component';
import { SidebarComponent } from './sidebar/sidebar.component';
const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login/login-routing.module').then(m => m.LoginRoutingModule) },
  { path: 'Challan', component: ChallanComponent },
  { path: 'Signup', component: SignupComponent },
  {path: 'PasswordRecovery', component: PasswordRecoveryComponent},
  { path: 'OtpVerify', component: OtpComponent },
  { path: 'ResetPassword', component: ResetPasswordComponent },
  { path: 'ChangePassword', component: ChangePasswordComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'CProfile', component: CProfileComponent },
  { path: 'Sidenav', component: SidebarComponent },


  // { path: '', loadChildren: () => import('./default/default-routing.module').then(m => m.DefaultRoutingModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

