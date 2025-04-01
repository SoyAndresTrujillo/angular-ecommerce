import { Component } from '@angular/core';
import { Product } from 'src/app/data/interfaces/products.model';
import { ProductService } from 'src/app/data/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.page.html',
  styleUrls: ['./create-product.page.scss'],
  standalone: false,
})
export class CreateProductPage {
  products: Product[] = [];

  /**
   * Constructor to initialize the ProductsPage component.
   * @param http - HttpClient instance for making HTTP requests
   */
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProductsCreated();
  }

  /**
   * Handles the action when the 'Create Product' button is clicked.
   * @param product - The product to be created.
   */
  handleFormSubmit(product: Product) {
    this.productService.addProductToProductsCreated(product);
    this.products = this.productService.getProductsCreated();
  }
}
