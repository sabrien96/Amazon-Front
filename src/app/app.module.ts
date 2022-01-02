import { RatingComponent } from './shared/components/rating/rating.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderModule } from './components/header/header.module';
import { HomePageComponent } from './components/home/homepage.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ProductCardComponent } from './shared/components/product-card/product-card.component'
import { ProductCardDesignComponent } from './shared/components/product-card-design/product-card-design.component';
import { PopularComponent } from './components/home/popular/popular.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { SwipperDirective } from './shared/directives/swipper.directive';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { SubCategoryComponent } from './components/all-categories/sub-category/sub-category.component';
import { ProductsComponent } from './components/products/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    CarouselComponent,
    SpinnerComponent,
    FilterPipe,
    ProductCardComponent,
    ProductCardDesignComponent,
    PopularComponent,
    RatingComponent,
    NotFoundComponent,
    SwipperDirective,
    AllCategoriesComponent,
    SubCategoryComponent,
    ProductsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgxPaginationModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json')
}
