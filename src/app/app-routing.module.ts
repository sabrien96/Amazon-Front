import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './components/home/homepage.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'all', loadChildren:()=>import('./components/all-categories/all-categories.module')
  .then(m=>m.AllCategoriesModule) },
  
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
