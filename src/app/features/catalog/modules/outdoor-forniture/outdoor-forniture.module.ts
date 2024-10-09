import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutdoorFornitureRoutingModule } from './outdoor-forniture-routing.module';
import { OutdoorFornitureComponent } from './outdoor-forniture.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';


@NgModule({
  declarations: [
    OutdoorFornitureComponent
  ],
  imports: [
    CommonModule,
    OutdoorFornitureRoutingModule,
    UikitModule
  ]
})
export class OutdoorFornitureModule { }
