import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
wishList:IProduct[]=[
  {
    name: 'Product1',
    image: ['../../../../assets/img/1.jpg'],
    brand: 'brand',
    description: 'description',
    countInStock: 10,
    price: 1200,
    category: 'category',
    subcategory: 'sabcategory',
    overview: 'overview',
    rating: 4.5, //default = 0
    numReviews: 20, //default = 0
    discount: 30, //default = 0
  },
  {
    name: 'Product1',
    image: ['../../../../assets/img/1.jpg'],
    brand: 'brand',
    description: 'description',
    countInStock: 10,
    price: 1200,
    category: 'category',
    subcategory: 'sabcategory',
    overview: 'overview',
    rating: 4.5, //default = 0
    numReviews: 20, //default = 0
    discount: 30, //default = 0
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
