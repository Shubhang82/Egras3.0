import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CProfileComponent } from './c-profile.component';

const routes: Routes = [
  { path: '', component: CProfileComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CProfileRoutingModule { }
