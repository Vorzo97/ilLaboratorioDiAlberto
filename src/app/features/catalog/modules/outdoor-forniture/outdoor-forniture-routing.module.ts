import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutdoorFornitureComponent } from './outdoor-forniture.component';

const routes: Routes = [{ path: '', component: OutdoorFornitureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutdoorFornitureRoutingModule { }
