import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { ProductCardDesignComponent } from '../../components/product-card-design/product-card-design.component';
import { RatingComponent } from '../../components/rating/rating.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { FilterPipe } from '../../pipes/filter.pipe';
// import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    SpinnerComponent,
    FilterPipe,
    ProductCardComponent,
    ProductCardDesignComponent,
    RatingComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    // NgxPaginationModule

  ],
  exports: [
    SpinnerComponent,
    FilterPipe,
    ProductCardComponent,
    ProductCardDesignComponent,
    RatingComponent,
    NotFoundComponent
  ]

})
export class CoreModule { }
