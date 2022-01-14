import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home/homepage.component';
import { ProductsComponent } from './components/products/products/products.component';
const routes: Routes = [
  // { path: '', redirectTo:'',pathMatch:'full' },
  { path: '', component: HomePageComponent },
  { path: 'all', component: AllCategoriesComponent },

  {
    path: 'products', loadChildren: () => import('./components/products/products.module')
      .then(m => m.ProductsModule)
  },
  {
    path: 'auth', loadChildren: () => import('./components/auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: 'user', loadChildren: () => import('./components/user-properties/user-properties.module')
      .then(m => m.UserPropertiesModule)
  },

  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
