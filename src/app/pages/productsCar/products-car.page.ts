import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/data/interfaces/products.model';
import { ProductService } from 'src/app/data/services/product.service';

/**
 * ProductsCardPage component is responsible for displaying a list of products added to the products card.
 */
@Component({
  selector: 'app-products-car',
  templateUrl: './products-car.page.html',
  styleUrls: ['./products-car.page.scss'],
  standalone: false,
})
export class ProductsCarPage implements OnInit, OnDestroy {
  products: Product[] = [];
  private subscription: Subscription = new Subscription();

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
    this.products = this.productService.getProductsAddedToProductsCar();

    // Subscribe to product updates
    this.subscription.add(
      this.productService.productsAddedToProductsCar$.subscribe((products) => {
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
   * Handles the action when the 'Delete' button is clicked.
   * @param product - The product that the user wants to delete.
   */
  handleDeleteProduct(product: Product) {
    this.productService.deleteProductFromProductsCar(product);
  }
}
