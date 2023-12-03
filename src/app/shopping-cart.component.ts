import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  template: `
    <h1>Shopping Cart ({{ calcTotal() }})</h1>
    <h2>Total Cost £{{ calcPrice() }}</h2>
    <div
      *ngFor="let product of products"

      >
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <div *ngIf="product">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">
            {{
              product.price.toLocaleString("en-UK", {
                style: "currency",
                currency: "GBP"
              })
            }}
          </p>
          <input
            type="number"
            [(ngModel)]="product.num"
            min="0"
            (ngModelChange)="modelChanged(product)"
          />
        </div>
      </div>
    </div>
    
    </div>
  `,
})
export class ShoppingCartComponent {
  @Input() products: any[];
  @Output() productRemoved = new EventEmitter();
  product: any;

  calcTotal() {
    return this.products.reduce((acc, prod) => (acc += prod.num), 0);
  }
  calcPrice() {
    return this.products.reduce((acc, prod) => {
      if (this.calcTotal() >= 10) {
        return (acc += prod.price * prod.num * 0.5);
      } else if (this.calcTotal() >= 5) {
        return (acc += prod.price * prod.num * 0.75);
      } else {
        return (acc += prod.price * prod.num);
      }
    }, 0);
  }

  // removeProduct(product) {
  //   this.productRemoved.emit(product);
  // }

  modelChanged(product) {
    if (product.num === 0) {
      this.productRemoved.emit(product);
    }
  }
}
