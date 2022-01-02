// import { RatingComponent } from './../../shared/components/rating/rating.component';
import { ProductCardComponent } from './../../shared/components/product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
// import { ProductsComponent } from './products/products.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    // ProductsComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxPaginationModule,

  ]
})
export class ProductsModule { }
