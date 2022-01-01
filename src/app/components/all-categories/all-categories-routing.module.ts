import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoriesComponent } from './all-categories/all-categories.component';

const routes: Routes = [
  {
    path: '', component: AllCategoriesComponent,
    // children: [
    //   {path:':subName',component:ProductsComponent}
    // ]
  },
  { path: 'products', loadChildren:()=>import('../products/products.module')
  .then(m=>m.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCategoriesRoutingModule { }
