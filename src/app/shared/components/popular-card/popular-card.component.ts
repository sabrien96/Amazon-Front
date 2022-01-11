import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-card',
  templateUrl: './popular-card.component.html',
  styleUrls: ['./popular-card.component.scss']
})
export class PopularCardComponent implements OnInit {

  @Input() product: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigategTo() {
    let id = this.product._id;
    console.log("card navigate successfully");
    this.router.navigate(['/products/product-details',id]);
  }


}
