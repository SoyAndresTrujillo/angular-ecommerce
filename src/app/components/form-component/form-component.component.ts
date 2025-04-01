import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../data/interfaces/products.model';
import { AlertController } from '@ionic/angular';

/**
 * FormComponentComponent handles the product submission form.
 *
 * Technical Details:
 * - Utilizes Angular's Component decorator to declare the component.
 * - Uses an @Output() EventEmitter to communicate form submissions to the parent component.
 * - Integrates Ionic's AlertController for displaying validation error messages.
 * - Implements two-way data binding for form inputs as specified in the associated HTML template.
 *
 * Functional Details:
 * - onSubmit: Triggers validation and, if successful, emits the product data and resets the form.
 * - validateForm: Checks for any missing or empty required fields in the product object.
 * - showValidationAlert: Displays an alert listing the required fields that need input.
 * - resetForm: Reinitializes the form to its default empty state after submission.
 */
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
  standalone: false,
})
export class FormComponentComponent {
  /**
   * EventEmitter to output a complete Product object upon successful form submission.
   */
  @Output() formSubmit = new EventEmitter<Product>();

  /**
   * The product model bound to the form inputs, initialized with default values.
   * Contains properties: id, title, price, description, category, image, and rating.
   */
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

  /**
   * Constructor injecting AlertController for displaying validation messages.
   *
   * @param alertController - Ionic's AlertController instance for presenting alerts.
   */
  constructor(private alertController: AlertController) {}

  /**
   * Handles the submission of the form.
   *
   * This async function first validates the form using validateForm(). If the validation
   * fails (i.e., required fields are missing), it displays an alert with all empty fields.
   * Otherwise, it emits the current product details to the parent component and resets the form.
   */
  async onSubmit() {
    const emptyFields = this.validateForm();

    if (emptyFields.length > 0) {
      await this.showValidationAlert(emptyFields);
      return;
    }

    this.formSubmit.emit(this.product);
    this.resetForm();
  }

  /**
   * Validates the current product form data.
   *
   * Checks each required field in the product object. If a field is empty or invalid, its
   * friendly name is added to the emptyFields array.
   *
   * @returns {string[]} An array containing the names of the required fields that are empty.
   */
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

  /**
   * Displays an alert indicating the missing fields required for form submission.
   *
   * Uses Ionic's AlertController to create an alert dialog with a descriptive message that
   * lists all empty required fields.
   *
   * @param emptyFields - Array of field names that are empty.
   */
  private async showValidationAlert(emptyFields: string[]) {
    // Create an Ionic alert dialog with the following configuration:
    // header: (string) The title of the alert, set to 'Validation Error' to indicate the nature of the error.
    // message: (string) The content of the alert, dynamically constructed to list all required fields that were left empty.
    // buttons: (string[]) An array defining the button(s) displayed in the alert, here providing a single 'OK' button.
    // cssClass: (string) A custom CSS class applied to the alert for styling, set to 'validation-alert'.
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

  /**
   * Resets the form by reinitializing the product object to a default state.
   *
   * This ensures that after a successful submission, the form is cleared and ready for new input.
   */
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
