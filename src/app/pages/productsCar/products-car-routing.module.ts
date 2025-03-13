import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsCarPage } from './products-car.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsCarPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsCarPageRoutingModule {}
