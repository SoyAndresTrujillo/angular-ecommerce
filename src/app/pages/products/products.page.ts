import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/data/interfaces/products.model';
import { ProductService } from 'src/app/data/services/product.service';
import { Subscription } from 'rxjs';

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
export class ProductsPage implements OnInit, OnDestroy {
  products: Product[] = [];
  private subscription: Subscription = new Subscription();

  /**
   * Constructor to initialize the ProductsPage component.
   * @param http - HttpClient instance for making HTTP requests
   */
  constructor(private productService: ProductService) {}

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * It triggers the fetching of products and subscribes to product updates.
   */
  ngOnInit() {
    // Initial load of products
    this.productService.getAllProducts().subscribe();

    // Subscribe to product updates
    this.subscription.add(
      this.productService.products$.subscribe((products) => {
        this.products = products;
      })
    );
  }

  /**
   * Lifecycle hook that is called when the component is destroyed.
   * It unsubscribes from all subscriptions to prevent memory leaks.
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Handles the action when the 'Buy Now' button is clicked.
   * @param product - The product that the user wants to purchase.
   */
  handleAddProductToProductsCar(product: Product) {
    this.productService.addProductToProductsCar(product);
  }

  /**
   * Handles the action when the 'Purchase' button is clicked.
   * @param product - The product that the user wants to purchase.
   */
  handlePurchaseProduct(product: Product) {}
}
