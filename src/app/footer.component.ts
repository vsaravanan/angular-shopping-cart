import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer class="page-footer font-small pt-4 text-center">
      <hr />
      <p>
        Built By Saravanan |
        <a href="https://saravanjs.com">Portfolio</a>        
      </p>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
