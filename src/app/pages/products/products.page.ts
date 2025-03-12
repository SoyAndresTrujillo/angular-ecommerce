import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/data/interfaces/products.model';

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
  constructor(private http: HttpClient) {}

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * It triggers the fetching of products.
   */
  ngOnInit() {
    this.getProducts();
  }

  /**
   * Fetches the list of products from the Fake Store API.
   * Notes: The data is then assigned to the products array.
   */
  getProducts() {
    this.http
      .get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((data) => {
        // returning the result of get from the HttpClient in format RxJS
        this.products = data;
      });
  }

  /**
   * Handles the action when the 'Buy Now' button is clicked.
   * @param product - The product that the user wants to purchase
   */
  buyNow(product: any) {
    console.log('Buy Now clicked for:', product.title);
  }
}
