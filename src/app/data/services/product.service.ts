import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products.model';

/**
 * ProductService is an Angular service that encapsulates all product-related data operations.
 *
 * This service employs Angular's dependency injection to provide HttpClient for making HTTP requests.
 * It leverages RxJS Observables to handle asynchronous data streams from an external API.
 *
 * Techniques used:
 * - Dependency Injection: The HttpClient is injected via the constructor for ease of testing and maintenance.
 * - Observables: Using RxJS Observables allows for efficient asynchronous HTTP requests and proper handling of data streams,
 *   which is critical in Angular applications.
 *
 * Types and Technical Cases:
 * - Strong Typing: The Product interface is used to ensure that the data obtained from the API matches the expected structure.
 * - API Communication: The service fetches data from the Fake Store API endpoint, a common pattern in RESTful services.
 * - Scalability: By centralizing HTTP operations in a service, it supports separation of concerns and facilitates reuse across multiple components.
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /**
   * The base URL of the external product API.
   */
  private baseUrl = 'https://fakestoreapi.com/products';

  /**
   * Constructs an instance of ProductService.
   * @param http - HttpClient is injected for performing HTTP operations.
   */
  constructor(private http: HttpClient) {}

  /**
   * Fetches all products from the API.
   *
   * This method issues a GET request to the defined baseUrl and returns an Observable of an array of Product objects.
   * Utilizing Observables provides flexibility for handling asynchronous data and potential error cases.
   *
   * @returns An Observable stream that emits an array of Product objects.
   */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  /**
   * The products added to the products card array.
   */
  private productsAddedToProductsCar: Product[] = [];

  /**
   * Adds a product to the products added to the products card array.
   * @param product - The product to be added to the products card array.
   */
  addProductToProductsCar(product: Product) {
    this.productsAddedToProductsCar.push(product);
  }

  /**
   * Gets the products added to the products card array.
   * @returns The products added to the products card array.
   */
  getProductsAddedToProductsCar(): Product[] {
    return this.productsAddedToProductsCar;
  }
}
