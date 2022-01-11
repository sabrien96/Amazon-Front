import { CoreModule } from './../../shared/modules/core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
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
