import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
wishList:IProduct[]=[]
  constructor() { }

  ngOnInit(): void {
  }

  removeItem(productId:any){
    this.wishList=this.wishList.filter((ele:any)=>{
      if(ele._id!=productId){
        return ele;
      }
    })
  }
}
