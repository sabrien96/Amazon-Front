import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
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
