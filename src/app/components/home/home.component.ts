import { FilterService } from './../../shared/services/filter.service';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from './../../shared/interfaces/product';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
productsList:IProduct[]=[];
originalProductList:IProduct[]=[];
allCategories:any;
arr=['a','bb','c']
checkboxForm:FormGroup;
  constructor(private productServe:ProductsService,
  private filterServe:FilterService,
  private fb:FormBuilder) {
//  this.filterServe.getProductByCategory('fashion').subscribe((data)=>
//  {
//    console.log(data);
//  }
  
    this.checkboxForm= this.fb.group({
      checkbox:'',
       myChoices: new FormArray([]),
    });
  }
  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProducts();
  }
  //get all categories
  getAllCategory(){
     this.filterServe.getAllCategory().subscribe((data)=>{
       this.allCategories=data;
     })
  }
  //get all products
  getAllProducts(){
      this.productServe.getAllProducts().subscribe((data) => {
      this.productsList = data;
      this.originalProductList=[...this.productsList];
     });
  }
  //filter based on checkbox option
  onCheckChange(event:any) {
  const formArray: FormArray = this.checkboxForm.get('myChoices') as FormArray;
  /* Selected */
  if(event.target.checked){
    // Add a new control in the arrayForm
    formArray.push(new FormControl(event.target.value));
  }
  /* unselected */
  else{
    // find the unselected element
    let i: number = 0;

    formArray.controls.forEach((ctrl) => {
      if(ctrl.value == event.target.value) {
        // Remove the unselected element from the arrayForm
        formArray.removeAt(i);
        return;
      }

      i++;
    });
  }
  if(formArray.value.length!=0){
    formArray.value.map((item:string)=>{
      console.log('item:',item);
      let name= this.filterProductsByCategory(item);
        // this.router.navigate([`/${cateName}/${filterCategory[0]['cateid']}`]);
      this.filterServe.getProductByCategory(name).subscribe((data)=>{
      console.log('new data: ',data);
      this.productsList=data;
      });    
    })
  }
  else{
    this.productsList=this.originalProductList;
  }
}


// filter by category name
  filterProductsByCategory(search: string) {
    let cateName;
  let filterCategory= this.allCategories.filter((item:any) => {
      return item.name.toString().toLowerCase().match(search.toString().toLowerCase());
    });
    if (filterCategory[0] != null) {
      cateName =filterCategory[0]['name'].toLowerCase();
      console.log(' search category for ' + filterCategory[0]['name']);
      console.log(' search category for ' + cateName);

     
    }  
    return cateName;  
  }
}
