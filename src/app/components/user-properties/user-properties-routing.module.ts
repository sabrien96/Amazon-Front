import { ProfileComponent } from './profile/profile.component';
import { UserPropertiesComponent } from './user-properties/user-properties.component';
import { OrdersComponent } from './orders/orders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'',component:UserPropertiesComponent,
    children:[
      {
        path:'profile',component:ProfileComponent
      },
      {
        path:'wishlist',component:WishlistComponent
      },
      {
        path:'cart',component:CartComponent
      },
      {
        path:'orders',component:OrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPropertiesRoutingModule { }
