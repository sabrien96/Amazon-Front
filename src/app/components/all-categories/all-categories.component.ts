import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FilterService } from '../../shared/services/filter.service';
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
    console.log(this.activate);
    
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
