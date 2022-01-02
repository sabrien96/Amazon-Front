import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './components/home/homepage.component';
import { ProductsComponent } from './components/products/products/products.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'all', component:AllCategoriesComponent },
  { path: 'products/:subName', component:ProductsComponent },

  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
