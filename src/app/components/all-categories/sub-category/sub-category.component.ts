import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from '../../../shared/services/filter.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  @Input() cateId: any;
  allSubCateList: any[]=[];
  //  = [
  //   { name: 'sub1' },
  //   { name: 'sub2' },
  //   { name: 'sub3' },

  // ];
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
      // this.index=this.randomNumber(0,this.allSubCateList.length)
      // console.log('response: ', response);

    });
  }

  navigate(params: string) {
    console.log();

    this.router.navigate(['products/:',{subName:params}])
  }

}
