import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  producto: Product;
  quantity: number;
  constructor() { }

  ngOnInit() {
    this.producto = new Product('Galletas', 12.11, true, null);
    this.quantity = 0;
  }

  isOnSale(): boolean {
    return this.producto.sale;
  }

  increaseQuantity(): number {
    this.quantity++;
    return this.quantity;
  }

  decreaseQuantity(): number {
    if (this.quantity > 0) {
      this.quantity--;
    }
    return this.quantity;
  }

  getQuantity(): number {
    return this.quantity;
  }
}
