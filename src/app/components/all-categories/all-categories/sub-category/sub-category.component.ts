import { IProduct } from './../../../../shared/interfaces/product';
import { FilterService } from './../../../../shared/services/filter.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { createElementCssSelector } from '@angular/compiler';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit, OnChanges {
  @Input() cateId: any;
  allSubCateList: any[]=[
    {name:'sub1'},
    {name:'sub2'},
    {name:'sub3'},
    
  ];
  constructor(private filterServe: FilterService) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getAllSubCategories();
  }

  ngOnInit(): void {
  }

  getAllSubCategories() {
    this.filterServe.getAllSubcategoryByCateId(this.cateId).subscribe((response) => {
      this.allSubCateList = response;
     // this.index=this.randomNumber(0,this.allSubCateList.length)
     // console.log('response: ', response);

    });
  }

  
}
