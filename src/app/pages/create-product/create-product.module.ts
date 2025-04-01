import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateProductPageRoutingModule } from './create-product-routing.module';
import { CreateProductPage } from './create-product.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProductPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CreateProductPage],
})
export class CreateProductPageModule {}
