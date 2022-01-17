import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FilterService } from '../../shared/services/filter.service';
@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {
allCateList:any[]=[
  {
   name:'category1 Name',
 }
];
  constructor(public filterServ:FilterService) {
    this.getAllCategories();

  }

  ngOnInit(): void {
  }

  getAllCategories()
  {
    this.filterServ.getAllCategory().subscribe((response)=>{
      this.allCateList=response;

    });
  }


}
