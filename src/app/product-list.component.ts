import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list',
  template: `
  <h1>Products</h1>
  <div *ngFor="let product of products">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">
            {{
            product.price.toLocaleString("en-UK", {
            style: "currency",
            currency: "GBP"
            })
            }}
          </p>
          <p>
            Add To Basket
            <button
              class="btn btn-primary btn-sm"
              (click)="addProductToCart(product)">
            +
            </button>
          </p>
      </div>
    </div>
  </div>
  `,
})
export class ProductListComponent {
  @Input() products: any[];
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }
}
