import { FilterService } from './../../services/filter.service';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product';


@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.scss']
})
export class SwipperComponent implements OnInit {
  @Input() compenentName: any;
  @Input() list: IProduct[] = [
    {
      name: 'Product1',
      image: ['../.././../../assets/img/1.jpg'],
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
      name: 'Product2',
      image: ['../.././../../assets/img/2.jpg'],
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
      name: 'Product3',
      image: ['../.././../../assets/img/3.jpg'],
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
      name: 'Product2',
      image: ['../.././../../assets/img/4.jpg'],
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
  ];
 
  constructor(private filterServ: FilterService) { 
        
  }
  
  ngOnInit(): void {

  }

  
  
  
}
