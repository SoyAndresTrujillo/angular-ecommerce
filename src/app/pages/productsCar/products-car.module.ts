import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsCarPageRoutingModule } from './products-car-routing.module';

import { ProductsCarPage } from './products-car.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsCarPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ProductsCarPage],
})
export class ProductsCarPageModule {}
