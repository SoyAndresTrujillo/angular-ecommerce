import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormPageRoutingModule } from './form-routing.module';
import { FormPage } from './form.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, FormPageRoutingModule],
  declarations: [FormPage],
})
export class FormPageModule {}
