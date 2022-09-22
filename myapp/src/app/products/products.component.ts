import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
allowNewProduct = true;
productCreationStatus = "No product Added"
productName = 'Default Product';
productCreated = false;
products = [];
constructor() { }

  ngOnInit(): void {}

    onCreateProduct() {
      this.productCreationStatus = "Product Added !!";
      this.productCreated = true;
     }
  }
