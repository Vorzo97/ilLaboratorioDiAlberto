import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';

const routes: Routes = [
  { path: '',
    component: CatalogComponent,
    children: [
      { path: 'sales', loadChildren: () => import('./modules/sales/sales.module').then(m => m.SalesModule) },
      { path: 'newArrival', loadChildren: () => import('./modules/new-arrival/new-arrival.module').then(m => m.NewArrivalModule) },
      { path: 'outdoorForniture', loadChildren: () => import('./modules/outdoor-forniture/outdoor-forniture.module').then(m => m.OutdoorFornitureModule) },
      { path: 'indoorForniture', loadChildren: () => import('./modules/indoor-forniture/indoor-forniture.module').then(m => m.IndoorFornitureModule) },
      { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
      { path: '', redirectTo: 'products', pathMatch: 'full'}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
