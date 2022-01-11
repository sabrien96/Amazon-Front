import { PrimengNGModule } from './shared/modules/primeng-ng/primeng-ng.module';
import { ProductsModule } from './components/products/products.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { CoreModule } from './shared/modules/core/core.module';
import { SortPipe } from './shared/pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    CarouselComponent,
    SwipperDirective,
    AllCategoriesComponent,
    SubCategoryComponent,
    SortPipe,
    
        // SwipperComponent,
    // ProductsComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    PrimengNGModule,
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
