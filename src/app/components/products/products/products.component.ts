import { FilterService } from './../../../shared/services/filter.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {
  loading: boolean = false;
  loadingPage:boolean=false;
  categoryName: any='category name';
  cateId: any;
  subcategoryName: string='';
  subCategoryList: any[] = [];
  categoryList: any[] = [];
  productsList: IProduct[] = [];
  originalList:IProduct[] = [];
  page = 1;
  count = 0;
  tableSize = 20;
  tableSizes = [3, 6, 9, 12];
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private filterServe: FilterService) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.cateId = parseInt(params.get('cateId') + '')+1;
      // this.subName = params.get('subName') + '';
      console.log("cateId: ",this.cateId);    
    });
  }
  
  ngOnInit(): void {
    this.getCategoryName();
    this.getSubCategory();
    // this.fetchAllProduct();
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.fetchAllProduct();
    // if (!this.categoryName && !this.subCategoryList) {
    //   this.loading = true;
    // }
  }


  getSubCategory(): void {
    this.filterServe.getAllSubcategoryByCateId(this.cateId).subscribe(
      response => {
        this.subCategoryList = response;
        this.loadingPage=true;
      });
  }
  getCategoryName() {
    this.filterServe.getAllCategory().subscribe((response) => {
      this.categoryList = response;
      console.log("cateList: ",this.categoryList);
      
      this.categoryList = this.categoryList.filter((el: any) => {
        return el.cateId === this.cateId ? el.name : '';
      });
      this.categoryName = this.categoryList[0]?.name;
      this.fetchAllProduct();
    });


  }
  // get all products by category name
  fetchAllProduct(): void {
    this.filterServe.getProductByCategory(this.categoryName).subscribe((response) => {
      this.productsList = response;
      console.log("productList: ",this.productsList);  
      this.originalList=[...this.productsList]
      this.loading = true;
    })
  }
  // filter by subcategory name
  filterBySubCategory(name: any) {
    this.subcategoryName=name;
    this.productsList=[];
   if(name===''){
     this.productsList=this.originalList;
    }
    else{
      this.originalList.filter((el: any) => {
       console.log(`${el.subcategory} , ${name}--> ${el.subcategory === name}`);
        if(el.subcategory===name){
          this.productsList.push(el);
        }
       });
   }
   
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.fetchAllProduct();
  }
  navigateTo(subName:any){
     this.router.navigate([`subcategory`,subName],{relativeTo:this.activatedRoute});    
   }
}
