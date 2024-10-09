import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo/catalogo.component';

// METTERE TUTTI I COMPONENTI COMUNI, PER POTER INIETTERA IL MODULO NEI DIVERSI MODULI

@NgModule({
  declarations: [
    CatalogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CatalogoComponent
  ]
})
export class UikitModule { }
