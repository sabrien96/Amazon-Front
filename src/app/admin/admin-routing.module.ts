import { AdminComponent } from './admin/admin.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',component:AdminComponent,
    children:[
      {
        path:'dashboard',component:DashboardComponent
      },
      {
        path:'products',component:ProductsComponent
      },
     
      {
        path:'users',component:UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
