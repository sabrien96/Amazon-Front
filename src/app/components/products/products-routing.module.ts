import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'product-details',component:ProductDetailsComponent
  },
  {
    path: ':cateId', component: ProductsComponent
  },
    // { path: '', redirectTo:'',pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
