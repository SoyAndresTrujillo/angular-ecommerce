import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductComponent } from './productComponent/product.component';

@NgModule({
  declarations: [ProductComponent],
  exports: [ProductComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
