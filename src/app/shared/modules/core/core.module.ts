import { SecondaryCardComponent } from './../../components/secondary-card/secondary-card.component';
import { MainCardComponent } from './../../components/main-card/main-card.component';
import { PrimengNGModule } from './../primeng-ng/primeng-ng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { RatingComponent } from '../../components/rating/rating.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SwipperComponent } from './../../components/swipper/swipper.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    FilterPipe,   
    RatingComponent,
    NotFoundComponent,
    SwipperComponent,
    MainCardComponent,
    SecondaryCardComponent
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
    MainCardComponent,
    SecondaryCardComponent
  ]

})
export class CoreModule { }
