import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from './product.model';
import { PromoCode } from './promo-code.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  
  numberItems: number = 0;
  subTotal: number = 0;
  discountPercent: number = 0;
  discount: number = 0;
  taxPercent: number = 10;
  tax: number = 0;
  
  
  public products: Product[] = [ 
    {
      id: 1,
      name:'SamSung Galaxy S20+',
      description:'Hàng trả bảo hành',
      image:'https://via.placeholder.com/200x150',
      price:1,
      quantity: 1
  
    },
    {
      id: 2,
      name:'iPhone X 64GB',
      description:'Nhà trạng AT&T',
      image:'https://via.placeholder.com/200x150',
      price:1,
      quantity: 1
    }
  ];
  promoCodes: PromoCode[] = [
    {
      code: 'AUTUMN',
      discountPercent: 10
    },
    {
      code: 'WINTER',
      discountPercent: 20
    }
  ];
  
  
  ngDoCheck(): void {
    this.numberItems = 0;
    this.subTotal = 0;

    for (const product of this.products) {
      this.numberItems += product.quantity;
      this.subTotal += product.price * product.quantity;
    }

    this.discount = (this.subTotal * this.discountPercent) / 100;
    this.tax = ((this.subTotal - this.discount) * this.taxPercent) / 100;
  }
  

  removeProduct(productId: number): void{
    const index = this.products.findIndex(product => product.id === productId);
    this.products.splice(index, 1);
  }

}
