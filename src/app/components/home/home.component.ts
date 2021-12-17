import { FilterService } from './../../shared/services/filter.service';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from './../../shared/interfaces/product';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
productsList:IProduct[]=[];
allCategories:any;
  constructor(private productServe:ProductsService,private filterServe:FilterService) {
    this.productServe.getAllProducts().subscribe((data) => {
     this.productsList = data;
    });
    this.filterServe.getAllCategory().subscribe((data)=>{
      this.allCategories=data;
    })

  }

  ngOnInit(): void {
  }

}
