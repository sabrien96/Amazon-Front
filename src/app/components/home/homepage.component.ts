import { LocalStorageService } from './../../shared/services/local-storage.service';
import { IProduct } from './../../shared/interfaces/product';
import { FilterService } from '../../shared/services/filter.service';
import { ProductsService } from '../../shared/services/products.service';
import { Component, OnInit, Output } from '@angular/core';
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
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomePageComponent implements OnInit {
  higherRatingList:IProduct[]=[];
  productsList: IProduct[] = [];
  originalProductsFilter: IProduct[] = [];
  addedItem:boolean=false;
  loading: boolean;
  notFound: boolean = false;
  allCategories: any;
  checkboxForm: FormGroup;
  page = 1;
  count = 0;
  tableSize = 20;
  tableSizes = [3, 6, 9, 12];
  sortArr:string [] = ['price', 'discount', 'rating'];
  sortFiled:string='';
  constructor(
    private productServe: ProductsService,
    private filterServe: FilterService,
    private fb: FormBuilder,
    private localStorageServ:LocalStorageService
    ) {

    this.checkboxForm = this.fb.group({
      checkbox: '',
      myChoices: new FormArray([]),
    });
    this.loading = false;

  }
  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProducts();
    this.fetchProduct();
  $(document).ready(function () {
        $('.custom-select').each(function(){
          $(this).children().first().attr("disabled","disabled");
        })
    });
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
      this.originalProductsFilter = data;
      this.productsList = [...this.originalProductsFilter];
      this.loading = true;
      this.higherRatingList=this.productsList.filter((ele)=>{
        return ele.rating>=4;
      })
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
              this.notFound = false;
              // this.setPage(1);
            });
          });
        }
        else {
          this.notFound = true;
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

  // filter by price
  filterPrice(priceLow: number, priceHigh: number, event: any) {
    console.log('price click');
    this.productsList = this.originalProductsFilter.filter((product) => {
      return product.price >= priceLow && product.price < priceHigh;
    })
  }
  // filter by discount
  filterDiscount(discount: number) {
    console.log('discount click');
    this.productsList = this.originalProductsFilter.filter((product) => {
      return product.discount >= discount;
    })
  }
  // filter by rating
  filterRating(rating: number) {
    console.log('rating click');
    this.productsList = this.originalProductsFilter.filter((product) => {
      if (product.rating >= rating) {
        console.log(product.rating);
      }
      return product.rating >= rating;
    })
  }
  fetchProduct(): void {
    this.filterServe.getAllProducts().subscribe(
      response => {
        this.originalProductsFilter = response;
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
  sortBy(event: any) {
    this.sortFiled=event.target.value;
  }
  // add item to whishlist
  addToWishList(product:IProduct){
   this.localStorageServ.addToWishList(product); 
   this.addedItem=true;
  }
}
