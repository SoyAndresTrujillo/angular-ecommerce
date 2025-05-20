import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/data/interfaces/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: false,
})
export class ProductComponent {
  // Receive the products array from the parent component.
  @Input() products: Product[] = [];

  // Receive the showAddProductButton from the parent component.
  @Input() showAddProductButton: boolean = false;

  // Emit an event when a product is selected for add to cart.
  @Output() addProductToProductsCar: EventEmitter<Product> =
    new EventEmitter<Product>();

  // Receive the showPurchaseProductButton from the parent component.
  @Input() showPurchaseProductButton: boolean = false;

  // Receive the showDeleteProductButton from the parent component.
  @Input() showDeleteProductButton: boolean = false;

  // Emit an event when a product is selected for purchase.
  @Output() purchaseProduct: EventEmitter<Product> =
    new EventEmitter<Product>();

  // Emit an event when a product is selected for delete.
  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  // Method called when "Buy Now" is clicked; it emits the event to the parent.
  handleAddProductToProductsCar(product: Product) {
    this.addProductToProductsCar.emit(product);
  }

  // Method called when "Buy Now" is clicked; it emits the event to the parent.
  handlePurchaseProduct(product: Product) {
    this.purchaseProduct.emit(product);
  }

  // Method called when "Delete" is clicked; it emits the event to the parent.
  handleDeleteProduct(product: Product) {
    this.deleteProduct.emit(product);
  }
}
