import { PopularCardComponent } from './../../components/popular-card/popular-card.component';
import { PrimengNGModule } from './../primeng-ng/primeng-ng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { RatingComponent } from '../../components/rating/rating.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SwipperComponent } from './../../components/swipper/swipper.component';
import { SpecialCardComponent } from '../../components/special-card/special-card.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    FilterPipe,   
    RatingComponent,
    NotFoundComponent,
    SwipperComponent,
    PopularCardComponent,
    SpecialCardComponent
  ],
  imports: [
    CommonModule,
    PrimengNGModule,
  ],
  exports: [
    SpinnerComponent,
    FilterPipe,
    RatingComponent,
    NotFoundComponent,
    SwipperComponent,
    PopularCardComponent,
    SpecialCardComponent
  ]

})
export class CoreModule { }
