import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewArrivalRoutingModule } from './new-arrival-routing.module';
import { NewArrivalComponent } from './new-arrival.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';


@NgModule({
  declarations: [
    NewArrivalComponent
  ],
  imports: [
    CommonModule,
    NewArrivalRoutingModule,
    UikitModule
  ]
})
export class NewArrivalModule { }
