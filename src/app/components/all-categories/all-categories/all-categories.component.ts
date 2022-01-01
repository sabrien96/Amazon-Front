import { FilterService } from './../../../shared/services/filter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {
 allCateList:any[]=[{
   name:'category Name',
   
 }];
  constructor(public filterServ:FilterService) {
    this.getAllCategories();
  }

  ngOnInit(): void {
  }

  getAllCategories()
  {
    this.filterServ.getAllCategory().subscribe((response)=>{
      this.allCateList=response;
      console.log('allCate: ',response);

    });
  }


}
