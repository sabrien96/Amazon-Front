import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()
  isVisible = true;
  categories = [
    { cateName: 'Your amazon.eg', router:"/all"  },
    { cateName: "Today's Deals", router:"/"  },
    { cateName: 'Sell', router:""  },
    { cateName: 'Help', router:""  },
    { cateName: 'Fashion', router:"/products/3"  },
    { cateName: 'Grocery' , router:"/products/2" },
    { cateName: 'Perfumes', router:"/products/3"  },
    { cateName: 'Mobile Phones' , router:"/products/1" },
    { cateName: 'Electronics', router:"/products/1"  },
    { cateName: 'Appliances' , router:"" }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigate(routerLink: string) {
    console.log('navigate');
    this.router.navigate([routerLink])
  }
}
