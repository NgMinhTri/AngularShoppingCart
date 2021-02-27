import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // Input: parent => child   (data flow)
  @Input() products;
  @Output() onRemoveProduct = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  removeProduct(productId: number): void{
    this.onRemoveProduct.emit(productId);
  }
  updateQuantity(element): void{
    console.log(element.value);
  }
  

}
