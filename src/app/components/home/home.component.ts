import { PaginationService } from './../../shared/services/pagination.service';
import { FilterService } from './../../shared/services/filter.service';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from './../../shared/interfaces/product';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productsList: IProduct[] = [];
  originalProductsFilter: IProduct[] = [];
  allCategories: any;
  checkboxForm: FormGroup;
  // POSTS:IProduct[]=[];
  page = 1;
  count = 0;
  tableSize = 20;
  tableSizes = [3, 6, 9, 12];

  constructor(
    private productServe: ProductsService,
    private filterServe: FilterService,
    private fb: FormBuilder,
  ) {
    this.checkboxForm = this.fb.group({
      checkbox: '',
      myChoices: new FormArray([]),
    });

  }
  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProducts();
    this.fetchProduct();

  }
  //get all categories
  getAllCategory() {
    this.filterServe.getAllCategory().subscribe((data) => {
      this.allCategories = data;
    });
  }
  //get all products
  getAllProducts() {
    this.productServe.getAllProducts().subscribe((data) => {
      this.productsList = data;
      this.originalProductsFilter = [...this.productsList];
      // this.productSize=this.productsList.length
    });
  }
  //filter based on checkbox option
  onCheckChange(event: any) {
    const formArray: FormArray = this.checkboxForm.get('myChoices') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    } else {
      /* unselected */
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl) => {
        if (ctrl.value === event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i++);
          return;
        }
        // i++;
      });
    }
    if (formArray.value.length != 0) {
      this.productsList = [];
      formArray.value.map((item: string) => {
        console.log('item:', item);
        let checkName = this.checkCategoryFounded(item);
        if (checkName !== 'not found') {
          this.filterServe.getProductByCategory(checkName).subscribe((data) => {
            console.log('new data: ', data);
            data.map((item) => {
              this.productsList.push(item);
              // this.setPage(1);
            });
          });
        }
      });
    }
    else {
      this.productsList = this.originalProductsFilter;
      // this.setPage(1);
      // this.productSize=this.productsList.length;
    }
  }

  // filter by category name
  checkCategoryFounded(search: string) {
    let cateName;
    let filterCategory = this.allCategories.filter((item: any) => {
      return item.name.toString().toLowerCase().match(search.toString().toLowerCase());
    });
    if (filterCategory[0] != null) {
      cateName = filterCategory[0]['name'].toLowerCase();
      console.log(' original name ' + filterCategory[0]['name']);
      console.log(' new cateName ' + cateName);
      return cateName;
    }
    else {
      console.log('Category name not found');
      return 'not found';
    }
  }

  fetchProduct(): void {
    this.filterServe.getAllProducts().subscribe(
      response => {
        this.productsList = response;
        // console.log(response);
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
