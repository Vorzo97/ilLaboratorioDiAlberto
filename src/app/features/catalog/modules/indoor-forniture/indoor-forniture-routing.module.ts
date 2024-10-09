import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndoorFornitureComponent } from './indoor-forniture.component';

const routes: Routes = [{ path: '', component: IndoorFornitureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndoorFornitureRoutingModule { }
