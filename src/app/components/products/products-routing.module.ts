import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: ':cateId', component: ProductsComponent,
    children: [
      // {path:'subcategory/:subName',component:SpecifiedProductsComponent},
      // {path:':subName',redirectTo:'',pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
