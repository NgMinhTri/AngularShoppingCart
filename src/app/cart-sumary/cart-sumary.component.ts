import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-sumary',
  templateUrl: './cart-sumary.component.html',
  styleUrls: ['./cart-sumary.component.css']
})
export class CartSumaryComponent implements OnInit {
  @Input() subTotal: number;
  @Input() tax: number;
  @Input() discount: number;
  constructor() { }

  ngOnInit(): void {
  }

}
