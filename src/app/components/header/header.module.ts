import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SidnavComponent } from './sidnav/sidnav.component';



@NgModule({
  declarations: [
    MainHeaderComponent,
    NavbarComponent,
    HeaderComponent,
    SidnavComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
 exports:[HeaderComponent]
})
export class HeaderModule { }
