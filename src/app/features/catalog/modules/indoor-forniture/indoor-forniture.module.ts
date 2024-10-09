import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndoorFornitureRoutingModule } from './indoor-forniture-routing.module';
import { IndoorFornitureComponent } from './indoor-forniture.component';
import { UikitModule } from 'src/app/shared/uikit/uikit.module';


@NgModule({
  declarations: [
    IndoorFornitureComponent
  ],
  imports: [
    CommonModule,
    IndoorFornitureRoutingModule,
    UikitModule
  ]
})
export class IndoorFornitureModule { }
