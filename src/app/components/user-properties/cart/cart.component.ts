import { StoreService } from './../../../shared/services/store.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cartCounter:number=0;
  constructor(private storeServe:StoreService) {
    this.storeServe.getCartCountListner().subscribe((response)=>{
      this.cartCounter=response;
      console.log(this.cartCounter);
      
    })
   }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartCounter+=1;
    this.storeServe.setCartCountListener(this.cartCounter)
    console.log("added to card",this.cartCounter);
    
  }
}
