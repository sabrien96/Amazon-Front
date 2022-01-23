import { LocalStorageService } from './../../../../shared/services/local-storage.service';
import { CartService } from './../../../../shared/services/cart.service';
import { IPOption } from './../../../../shared/interfaces/options.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from '../../../../shared/services/filter.service';
// declare $ as 'jquery';
import * as $ from 'jquery';
@Component({
  selector: 'app-product-properties',
  templateUrl: './product-properties.component.html',
  styleUrls: ['./product-properties.component.scss']
})
export class ProductPropertiesComponent implements OnInit {
  @Input() currentProduct: any;
 @Output() addedItem = new EventEmitter<boolean>();
  whishlist:any;
  error: any;
  lenght: number = 0;
  optionArray: any[] = [];
  option: IPOption[] = [{
    options: [],
    cateId: 0,
    name: ""
  }];
  constructor(
    private cartServ: CartService,
    private localStorageServ:LocalStorageService
  ) { }


  keyFilter: any;
  ngOnInit(): void {
  }
  addToCart() {
    this.cartServ.addToCart(this.currentProduct, 1).subscribe((response) => {
     this.addedItem.emit(true);
    },
      (err) => {
        console.log(err);
        
        this.addedItem.emit(true);
      });
  }
  addToList() {
   this.localStorageServ.addToWishList(this.currentProduct);
  }



}
