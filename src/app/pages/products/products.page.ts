import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/interfaces/products.model';
import { ProductService } from 'src/app/data/services/product.service';

/**
 * ProductsPage component is responsible for displaying a list of products.
 * It fetches product data from an external API and allows users to initiate a purchase.
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: false,
})
export class ProductsPage implements OnInit {
  products: Product[] = [];

  /**
   * Constructor to initialize the ProductsPage component.
   * @param http - HttpClient instance for making HTTP requests
   */
  constructor(private productService: ProductService) {}

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * It triggers the fetching of products.
   */
  ngOnInit() {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  /**
   * Handles the action when the 'Buy Now' button is clicked.
   * @param product - The product that the user wants to purchase.
   */
  handleAddProductToProductsCar(product: Product) {
    this.productService.addProductToProductsCar(product);
    console.log(this.productService.getProductsAddedToProductsCar());
  }

  /**
   * Handles the action when the 'Purchase' button is clicked.
   * @param product - The product that the user wants to purchase.
   */
  handlePurchaseProduct(product: Product) {
    console.log({ product });
  }
}
