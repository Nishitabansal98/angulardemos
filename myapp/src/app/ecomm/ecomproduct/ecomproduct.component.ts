import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecomproduct',
  templateUrl: './ecomproduct.component.html',
  styleUrls: ['./ecomproduct.component.css']
})
export class EcomproductComponent implements OnInit {

  products = [];
  constructor() { }

  ngOnInit(): void {
  }

}
