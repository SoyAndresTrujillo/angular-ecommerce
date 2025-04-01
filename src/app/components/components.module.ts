import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './productComponent/product.component';
import { FormComponentComponent } from './form-component/form-component.component';

@NgModule({
  declarations: [ProductComponent, FormComponentComponent],
  exports: [ProductComponent, FormComponentComponent],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class ComponentsModule {}
