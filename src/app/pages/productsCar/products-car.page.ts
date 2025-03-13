import { Component, OnInit } from '@angular/core';
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
export class ProductsCarPage implements OnInit {
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
    this.products = this.productService.getProductsAddedToProductsCar();
    console.log(this.products);
  }
}
