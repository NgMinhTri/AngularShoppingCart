import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
  styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {
  public title = 'Angular Shopping Cart';
  @Input() numberItems: number;

  constructor() { }

  ngOnInit(): void {
  }

}
