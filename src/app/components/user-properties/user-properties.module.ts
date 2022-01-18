import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPropertiesRoutingModule } from './user-properties-routing.module';
import { UserPropertiesComponent } from './user-properties/user-properties.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule} from '@angular/forms';
import { CoreModule } from '../../shared/modules/core/core.module';
@NgModule({
  declarations: [
    UserPropertiesComponent,
    WishlistComponent,
    CartComponent,
    OrdersComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    UserPropertiesRoutingModule,
    FormsModule,
    CoreModule
  ]
})
export class UserPropertiesModule { }
