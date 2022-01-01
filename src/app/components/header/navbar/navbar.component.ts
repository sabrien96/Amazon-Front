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
    { cateName: 'Fashion', router:""  },
    { cateName: 'Grocery' , router:"" },
    { cateName: 'Perfumes', router:""  },
    { cateName: 'Mobile Phones' , router:"" },
    { cateName: 'Electronics', router:""  },
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
