import { StoreService } from './../../../shared/services/store.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartCounter: number = 0;
  qty: number = 1;
  cartsList:IProduct[]=[];
  constructor(private storeServe: StoreService) {
    this.storeServe.getCartCountListner().subscribe((response) => {
      this.cartCounter = response;
      console.log(this.cartCounter);

    })
  }

  ngOnInit(): void {
  }
  addToCart() {
    this.cartCounter += 1;
    this.storeServe.setCartCountListener(this.cartCounter)
    console.log("added to card", this.cartCounter);

  }
  counterForQty(operation: string) {
    switch (operation) {
      case '+':
        this.qty = this.qty + 1;
        break;
      case '-':
        this.qty = this.qty - 1;
        break;
    }
    console.log(`op: ${operation} , ${this.qty}`);

  }
}
