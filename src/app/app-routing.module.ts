import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallanComponent } from './challan/challan.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup/signup.component';
import { TesttestComponent } from './testtest/testtest.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./login/login/login-routing.module').then(m => m.LoginRoutingModule) },
  { path: 'Challan', component: ChallanComponent },
  { path: 'Test', component: TesttestComponent },
  {path: 'Signup', component: SignupComponent},
  // { path: '', loadChildren: () => import('./default/default-routing.module').then(m => m.DefaultRoutingModule) },
  { path: '**', redirectTo: '' },


  {
    path: 'Profile',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

