import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EChallanComponent } from './e-challan.component';

const routes: Routes = [
  { path: '', component: EChallanComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchallanRoutingModule { }
