import { CoreModule } from './../../shared/modules/core/core.module';
// import { RatingComponent } from './../../shared/components/rating/rating.component';
import { ProductCardComponent } from './../../shared/components/product-card/product-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
// import { ProductsComponent } from './products/products.component';
import { ProductsComponent } from './products/products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSliderComponent } from './product-details/product-slider/product-slider.component';
import { ProductPropertiesComponent } from './product-details/product-properties/product-properties.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductSliderComponent,
    ProductPropertiesComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxPaginationModule,
    CoreModule
  ],
  exports: [ProductsComponent]
})
export class ProductsModule { }
