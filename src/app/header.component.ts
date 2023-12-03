import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Shopping Cart Demo</a>
    </nav>
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">Saravanan Shopping Cart in Angular 16</h1>
        <p class="lead">
          This is a test application built for Saravanan interview process.
        </p>
      </div>
    </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
