import { ProductsModule } from './components/products/products.module';
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
import { SwipperDirective } from './shared/directives/swipper.directive';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { SubCategoryComponent } from './components/all-categories/sub-category/sub-category.component';
// import { ProductsComponent } from './components/products/products/products.component';
import { CoreModule } from './shared/modules/core/core.module';
import { PopularComponent } from './components/home/popular/popular.component';
import { SortPipe } from './shared/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    PopularComponent,
    CarouselComponent,
    SwipperDirective,
    AllCategoriesComponent,
    SubCategoryComponent,
    SortPipe,
    // ProductsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    ProductsModule,
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
