import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {
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
