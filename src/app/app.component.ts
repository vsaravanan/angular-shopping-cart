import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  productList = [
    { name: "Product One", price: 10 },
    { name: "Product Two", price: 20 },
    { name: "Product Three", price: 30 }
  ];
  cartProductList = [];

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(
      productInCart => productInCart.name === product.name
    );
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, num: 1 });
      return;
    }
    productExistInCart.num += 1;
  }
  removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(
      ({ name }) => name !== product.name
    );
  }
}
