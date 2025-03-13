import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsCarPage } from './products-car.page';

describe('ProductsCarPage', () => {
  let component: ProductsCarPage;
  let fixture: ComponentFixture<ProductsCarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
