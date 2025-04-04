import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/products.model';

/**
 * ProductService is an Angular service that encapsulates all product-related data operations.
 * It manages both API-fetched products and user-created products, providing a unified stream
 * of products to components through RxJS Observables.
 *
 * Key features:
 * - Maintains a single source of truth for products using BehaviorSubject
 * - Combines API products with user-created products
 * - Provides real-time updates to all subscribed components
 * - Manages separate lists for created products and shopping cart products
 *
 * RxJS Concepts Used:
 * - BehaviorSubject: A type of Observable that requires an initial value and stores the "current" value.
 *   Each new subscriber gets the current value immediately upon subscription.
 * - Observable: A stream of data that components can subscribe to for updates
 * - tap: An RxJS operator that performs side effects without affecting the stream
 * - pipe: An RxJS operator that chains multiple operators together
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /**
   * The base URL of the external product API.
   * This endpoint provides the initial set of products.
   */
  private baseUrl = 'https://fakestoreapi.com/products';

  /**
   * Constructs an instance of ProductService.
   * @param http - HttpClient is injected for performing HTTP operations.
   */
  constructor(private http: HttpClient) {}

  /**
   * BehaviorSubject to track the current state of all products (API + created).
   * BehaviorSubject requires an initial value (empty array in this case) and
   * maintains the "current" value that new subscribers will receive immediately.
   */
  private productsSubject = new BehaviorSubject<Product[]>([]);

  /**
   * Public Observable that components can subscribe to for product updates.
   * Using asObservable() prevents external code from calling next() on the BehaviorSubject,
   * maintaining proper encapsulation.
   */
  products$ = this.productsSubject.asObservable();

  /**
   * Stores products created by users separately from API products.
   * This array persists created products even when the API products are refreshed.
   */
  private createdProducts: Product[] = [];

  /**
   * Fetches all products from the API and combines them with created products.
   *
   * The method uses RxJS operators:
   * - pipe(): Chains multiple operators together
   * - tap(): Performs side effects (updating the BehaviorSubject) without affecting the stream
   *
   * @returns An Observable of Product[] that emits the combined products
   */
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      tap((apiProducts) => {
        // Combine API products with created products using spread operator
        const allProducts = [...apiProducts, ...this.createdProducts];
        // Update the BehaviorSubject with the combined products
        this.productsSubject.next(allProducts);
      })
    );
  }

  /**
   * Adds a newly created product to both the created products array and the main products stream.
   * This ensures the product persists across page reloads and is immediately available to subscribers.
   *
   * @param product - The product to be added to the system
   */
  addProductCreatedToProducts(product: Product) {
    // Add to created products array for persistence
    this.createdProducts.push(product);

    // Get current products and add the new one to the stream
    const currentProducts = this.productsSubject.getValue();
    this.productsSubject.next([...currentProducts, product]);
  }

  /**
   * Products added to the shopping cart.
   * This array maintains the current state of the user's shopping cart.
   */
  private productsAddedToProductsCar: Product[] = [];

  /**
   * Adds a product to the shopping cart.
   *
   * @param product - The product to be added to the shopping cart
   */
  addProductToProductsCar(product: Product) {
    this.productsAddedToProductsCar.push(product);
  }

  /**
   * Retrieves all products currently in the shopping cart.
   *
   * @returns Array of products in the shopping cart
   */
  getProductsAddedToProductsCar(): Product[] {
    return this.productsAddedToProductsCar;
  }

  /**
   * Array to track products created by the user.
   * This is separate from the main products stream and shopping cart.
   */
  private productsCreated: Product[] = [];

  /**
   * Adds a product to the created products tracking array.
   *
   * @param product - The product to be added to the created products list
   */
  addProductToProductsCreated(product: Product) {
    this.productsCreated.push(product);
  }

  /**
   * Retrieves all products created by the user.
   *
   * @returns Array of user-created products
   */
  getProductsCreated(): Product[] {
    return this.productsCreated;
  }
}
