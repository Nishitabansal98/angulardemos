import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ecom',
  templateUrl: './ecom.component.html',
  styleUrls: ['./ecom.component.css']
})
export class EcomComponent implements OnInit {
  @Input()
  productElement: {
    name: string;
    quantity: number;
    status: string;
  };
  constructor() { }

  ngOnInit(): void {
  }

}
