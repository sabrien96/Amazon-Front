import { IPOption } from './../../../../shared/interfaces/options.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from '../../../../shared/services/filter.service';
// declare $ as 'jquery';
import * as $ from 'jquery';
@Component({
  selector: 'app-product-properties',
  templateUrl: './product-properties.component.html',
  styleUrls: ['./product-properties.component.scss']
})
export class ProductPropertiesComponent implements OnInit {
  @Input() currentProduct: any;
  error: any;
  addedItem = false;
  lenght: number = 0;
  optionArray: any[] = [];
  option: IPOption[] = [{
    options: [],
    cateId: 0,
    name: ""
  }];
  constructor(
    private filterService: FilterService,
    private router: Router,
  ) { }


  keyFilter: any;
  ngOnInit(): void {


  }
  increasePriceValue(price: any) {

  }



}
