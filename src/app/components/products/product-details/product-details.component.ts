import { ProductsService } from './../../../shared/services/products.service';
import { IProduct } from './../../../shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  productItem: IProduct = {
    name: "",
    image: [],
    brand: "",
    description: "",
    countInStock: 0,
    price: 0,
    category: "",
    subcategory: "",
    overview: "",
    rating: 0, //default = 0
    numReviews: 0, //default = 0
    discount: 0
  };

  constructor(private activatedRoute: ActivatedRoute, private productServe: ProductsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('prodId')
    });
    this.getProductByID();




    $(document).ready(function () {



  });
}

  getProductByID() {
    this.productServe.getProductById(this.productId).subscribe((response) => {
      this.productItem = response;
    })
  }
}
