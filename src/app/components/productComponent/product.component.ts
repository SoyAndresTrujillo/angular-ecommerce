import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Product } from 'src/app/data/interfaces/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: false,
})
export class ProductComponent implements OnInit {
  // Receive the products array from the parent component.
  @Input() products: Product[] = [];

  // Receive the showAddProductButton from the parent component.
  @Input() showAddProductButton: boolean = true;

  // Emit an event when a product is selected for add to cart.
  @Output() addProductToProductsCar: EventEmitter<Product> =
    new EventEmitter<Product>();

  // Receive the showPurchaseProductButton from the parent component.
  @Input() showPurchaseProductButton: boolean = true;

  // Emit an event when a product is selected for purchase.
  @Output() purchaseProduct: EventEmitter<Product> =
    new EventEmitter<Product>();

  constructor() {}

  ngOnInit() {}

  // Method called when "Buy Now" is clicked; it emits the event to the parent.
  handleAddProductToProductsCar(product: Product) {
    this.addProductToProductsCar.emit(product);
  }

  // Method called when "Buy Now" is clicked; it emits the event to the parent.
  handlePurchaseProduct(product: Product) {
    this.purchaseProduct.emit(product);
  }
}
