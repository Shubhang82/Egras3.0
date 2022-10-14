import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './default/default.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChallanComponent } from './challan/challan.component';
import { SignupComponent } from './signup/signup/signup.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { PasswordRecoveryComponent } from './PasswordRecovery/password-recovery/password-recovery.component';
 import { MatToolbarModule } from '@angular/material/toolbar';
import { ChangePasswordComponent } from './ChangePassword/change-password/change-password.component';
import { OtpComponent } from './otpverify/otp/otp.component';
import { ProfileComponent } from './Profile/profile/profile.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModule } from './material.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CProfileComponent } from './CreateProfile/c-profile/c-profile.component';
import { TokenInterceptorService } from './Component/Service/token-interceptor.service';

import { MobDirective } from './Component/Matrial/Budget-head';

@NgModule({
  declarations: [
    AppComponent,
    ChallanComponent,
    SignupComponent,
    PasswordRecoveryComponent,
    ChangePasswordComponent,
    OtpComponent,
    ProfileComponent,
    CProfileComponent,
    MobDirective
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    DefaultModule,
    HomeModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
