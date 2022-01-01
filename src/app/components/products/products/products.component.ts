import { FilterService } from './../../../shared/services/filter.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { IProduct } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnChanges {
subcategoryName:string;
productsList:IProduct[]=[
  {
    name: 'name1',
    image: ['image'],
    brand: 'brand',
    description: 'discription',
    countInStock: 5,
    price: 100,
    category: 'cateogery',
    subcategory: 'sab name',
    overview: 'overview',
    rating:4.4, //default = 0
    numReviews: 5, //default = 0
    discount: 100, //default = 0
  },
  {
    name: 'name1',
    image: ['image'],
    brand: 'brand',
    description: 'discription',
    countInStock: 5,
    price: 100,
    category: 'cateogery',
    subcategory: 'sab name',
    overview: 'overview',
    rating:4.4, //default = 0
    numReviews: 5, //default = 0
    discount: 100, //default = 0
  },
  {
    name: 'name1',
    image: ['image'],
    brand: 'brand',
    description: 'discription',
    countInStock: 5,
    price: 100,
    category: 'cateogery',
    subcategory: 'sab name',
    overview: 'overview',
    rating:4.4, //default = 0
    numReviews: 5, //default = 0
    discount: 100, //default = 0
  },
  {
    name: 'name1',
    image: ['image'],
    brand: 'brand',
    description: 'discription',
    countInStock: 5,
    price: 100,
    category: 'cateogery',
    subcategory: 'sab name',
    overview: 'overview',
    rating:4.4, //default = 0
    numReviews: 5, //default = 0
    discount: 100, //default = 0
  },
  {
    name: 'name1',
    image: ['image'],
    brand: 'brand',
    description: 'discription',
    countInStock: 5,
    price: 100,
    category: 'cateogery',
    subcategory: 'sab name',
    overview: 'overview',
    rating:4.4, //default = 0
    numReviews: 5, //default = 0
    discount: 100, //default = 0
  },
  {
    name: 'name1',
    image: ['image'],
    brand: 'brand',
    description: 'discription',
    countInStock: 5,
    price: 100,
    category: 'cateogery',
    subcategory: 'sab name',
    overview: 'overview',
    rating:4.4, //default = 0
    numReviews: 5, //default = 0
    discount: 100, //default = 0
  },
  {
    name: 'name2',
    image: ['image'],
    brand: 'brand',
    description: 'discription',
    countInStock: 5,
    price: 100,
    category: 'cateogery',
    subcategory: 'sab name',
    overview: 'overview',
    rating:4.4, //default = 0
    numReviews: 5, //default = 0
    discount: 100, //default = 0
  },
  {
    name: 'name3',
    image: ['image'],
    brand: 'brand',
    description: 'discription',
    countInStock: 5,
    price: 100,
    category: 'cateogery',
    subcategory: 'sab name',
    overview: 'overview',
    rating:4.4, //default = 0
    numReviews: 5, //default = 0
    discount: 100, //default = 0
  },
   
];
page = 1;
  count = 0;
  tableSize = 20;
  tableSizes = [3, 6, 9, 12];
  constructor(private activatedRoute:ActivatedRoute ,private filterServe:FilterService) {
    this.subcategoryName=this.activatedRoute.snapshot.paramMap.get('subName')+'';
    console.log("params",this.activatedRoute.snapshot.paramMap.get('subName'));
    this.fetchProduct();
   }
   
   ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  // getProductBySubCategory(){
  //   this.filterServe.getProductsBySubcategory(this.subcategoryName).subscribe((response)=>{
  //     this.productsList=response;
  //   });
  // }

  fetchProduct(): void {
    this.filterServe.getAllProducts().subscribe(
      response => {
        this.productsList=response;
      });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchProduct();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchProduct();
  }

}
