import { IProduct } from './../../../shared/interfaces/product';
import { FilterService } from './../../../shared/services/filter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  higherRatedList: IProduct[] = [];
  loading:boolean=false;
  constructor(private filterServ: FilterService) {

    
  }
  
  ngOnInit(): void {
    this.filterServ.getAllProducts().subscribe((data)=>{
      this.higherRatedList= data.filter((item)=>{
        return item.rating>=4.5;
      });
      this.loading=true;
    });

  }



}

