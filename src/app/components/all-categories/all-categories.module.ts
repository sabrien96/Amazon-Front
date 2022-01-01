import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategoriesRoutingModule } from './all-categories-routing.module';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { SubCategoryComponent } from './all-categories/sub-category/sub-category.component';


@NgModule({
  declarations: [

    AllCategoriesComponent,
    SubCategoryComponent,
  ],
  imports: [
    CommonModule,
    AllCategoriesRoutingModule
  ]
})
export class AllCategoriesModule { }
