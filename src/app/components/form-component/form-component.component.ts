import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../data/interfaces/products.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
  standalone: false,
})
export class FormComponentComponent {
  @Output() formSubmit = new EventEmitter<Product>();

  product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };

  constructor(private alertController: AlertController) {}

  async onSubmit() {
    const emptyFields = this.validateForm();

    if (emptyFields.length > 0) {
      await this.showValidationAlert(emptyFields);
      return;
    }

    this.formSubmit.emit(this.product);
    this.resetForm();
  }

  private validateForm(): string[] {
    const emptyFields: string[] = [];

    if (!this.product.title.trim()) emptyFields.push('Title');
    if (!this.product.price) emptyFields.push('Price');
    if (!this.product.description.trim()) emptyFields.push('Description');
    if (!this.product.category.trim()) emptyFields.push('Category');
    if (!this.product.image.trim()) emptyFields.push('Image URL');
    if (!this.product.rating.rate) emptyFields.push('Rating Rate');
    if (!this.product.rating.count) emptyFields.push('Rating Count');

    return emptyFields;
  }

  private async showValidationAlert(emptyFields: string[]) {
    const alert = await this.alertController.create({
      header: 'Validation Error',
      message: `Please fill in the following required fields: ${emptyFields.join(
        ', '
      )}`,
      buttons: ['OK'],
      cssClass: 'validation-alert',
    });

    await alert.present();
  }

  private resetForm() {
    this.product = {
      id: 0,
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      rating: {
        rate: 0,
        count: 0,
      },
    };
  }
}
