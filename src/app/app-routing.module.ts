import { AuthGuard } from './shared/guards/auth.guard';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home/homepage.component';
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
      .then(m => m.UserPropertiesModule),
      canActivate:[AuthGuard]
  },
  {
    path:'admin',loadChildren:()=>import('./admin/admin.module')
    .then(m=>m.AdminModule)
  },

  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
