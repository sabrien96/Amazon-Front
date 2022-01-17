import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from '../../../shared/services/filter.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
  @Input() cateId: any;
  allSubCateList: any[] = [
    {
      cateId:3,
      name:'subcategory'
    },   
  ];
  constructor(private filterServe: FilterService, private router: Router) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getAllSubCategories();
  }

  ngOnInit(): void {
  }

  getAllSubCategories() {
    this.filterServe.getAllSubcategoryByCateId(this.cateId + 1).subscribe((response) => {
      this.allSubCateList = response;
    });
  }

  navigateToProducts(subName: string) {
    this.router.navigate(['products',this.cateId]);
    // this.router.navigate(['products',subName], { queryParams: { cateId: this.cateId, subName: subName } })
  }

}
