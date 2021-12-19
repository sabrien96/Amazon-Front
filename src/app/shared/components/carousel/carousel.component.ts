import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  path='../../../../assets/icons/'
allDeals=[
  {
    label:'All Deals',
    // icon:'fas fa-shopping-cart',
    icon:`${this.path}icons_all_categories.png`,
    router:'',
  },
  {
    label:'Computers & Accessories',
    // icon:'fas fa-laptop',
    icon:`${this.path}icons_laptops.png`,
    router:'',
  },
  {
    label:'Beauty',
    icon:`${this.path}icons_beauty_perfumes.png`,
    router:'',
  },
  {
    label:'Home',
    icon:`${this.path}icons_home.png`,
    router:'',
  },
  {
    label:'Electronics',
    icon:`${this.path}icons_Electronics.png`,
    router:'',
  },
  {
    label:'Health & Personal Care',
    icon:`${this.path}icons_HPC.png`,
    router:'',
  },
  {
    label:'Mobiles Phones & Accessories',
    icon:`${this.path}icons_mobiles.png`,
    router:'',
  },
  {
    label:'Grocery',
    icon:`${this.path}icons_supermarket.png`,
    router:'',
  },
  {
    label:'Fashion',
    icon:`${this.path}icons_fashion.png`,
    router:'',
  },
  {
    label:'Toys',
    icon:`${this.path}icons_toys.png`,
    router:'',
  },
  {
    label:'Sports',
    icon:`${this.path}icons_sports.png`,
    router:'',
  },
];
remainderDeals=[
  {
    label:'Kitchen & Dining',
    // icon:'fas fa-shopping-cart',
    icon:`${this.path}icons_kitchen_essentials.png`,
    router:'',
  },
  {
    label:'Baby',
    // icon:'fas fa-shopping-cart',
    icon:`${this.path}icons_baby.png`,
    router:'',
  },
  {
    label:'Home Improvement',
    // icon:'fas fa-shopping-cart',
    icon:`${this.path}icons_tools.png`,
    router:'',
  },
  {
    label:'Books',
    // icon:'fas fa-shopping-cart',
    icon:`${this.path}icons_books.png`,
    router:'',
  },
  {
    label:'Furniture',
    // icon:'fas fa-shopping-cart',
    icon:`${this.path}icons_furniture.png`,
    router:'',
  },
  {
    label:'Pets',
    // icon:'fas fa-shopping-cart',
    icon:`${this.path}icons_pets.png`,
    router:'',
  },
  {
    label:'Gaming',
    // icon:'fas fa-shopping-cart',
    icon:`${this.path}icons_gaming.png`,
    router:'',
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
