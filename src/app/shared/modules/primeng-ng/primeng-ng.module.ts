import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule} from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem} from 'primeng/api'; //api
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
// import { TableModule } from 'primeng/table';
// import { DialogModule } from 'primeng/dialog';
// import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import { DropdownModule } from 'primeng/dropdown';
// import { RadioButtonModule } from 'primeng/radiobutton';
// import { RatingModule } from 'primeng/rating';
// import { ToolbarModule } from 'primeng/toolbar';
// import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,

    AccordionModule,
    ButtonModule,
    ToastModule
  ],
  exports: [
    CarouselModule,
    AccordionModule,
    ButtonModule,
    ToastModule,
   
  ]
})
export class PrimengNGModule { }
