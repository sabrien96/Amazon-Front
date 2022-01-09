import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  path = '../../../../assets/icons/'
  allDeals = [
    {
      label: 'All Deals',
      // icon:'fas fa-shopping-cart',
      icon: `${this.path}icons_all_categories.png`,
      router: '',
    },
    {
      label: 'Computers & Accessories',
      // icon:'fas fa-laptop',
      icon: `${this.path}icons_laptops.png`,
      router: '/products/1',
    },
    {
      label: 'Beauty',
      icon: `${this.path}icons_beauty_perfumes.png`,
      router: '/products/5',
    },
    {
      label: 'Home',
      icon: `${this.path}icons_home.png`,
      router: '/products/6',
    },
    {
      label: 'Electronics',
      icon: `${this.path}icons_Electronics.png`,
      router: '/products/1',
    },
    {
      label: 'Health & Personal Care',
      icon: `${this.path}icons_HPC.png`,
      router: '/products/5',
    },
    {
      label: 'Mobiles Phones & Accessories',
      icon: `${this.path}icons_mobiles.png`,
      router: '/products/1',
    },
    {
      label: 'Grocery',
      icon: `${this.path}icons_supermarket.png`,
      router: '/products/2',
    },
    {
      label: 'Fashion',
      icon: `${this.path}icons_fashion.png`,
      router: '/products/3',
    },
  ];
  remainderDeals = [
    {
      label: 'Toys',
      icon: `${this.path}icons_toys.png`,
      router: '',
    },
    {
      label: 'Sports',
      icon: `${this.path}icons_sports.png`,
      router: '',
    },
    {
      label: 'Kitchen & Dining',
      // icon:'fas fa-shopping-cart',
      icon: `${this.path}icons_kitchen_essentials.png`,
      router: '/products/6',
    },
    {
      label: 'Baby',
      // icon:'fas fa-shopping-cart',
      icon: `${this.path}icons_baby.png`,
      router: '',
    },
    {
      label: 'Home Improvement',
      // icon:'fas fa-shopping-cart',
      icon: `${this.path}icons_tools.png`,
      router: '/products/6',
    },
    {
      label: 'Books',
      // icon:'fas fa-shopping-cart',
      icon: `${this.path}icons_books.png`,
      router: '',
    },
    {
      label: 'Furniture',
      // icon:'fas fa-shopping-cart',
      icon: `${this.path}icons_furniture.png`,
      router: '/products/6',
    },
    {
      label: 'Pets',
      // icon:'fas fa-shopping-cart',
      icon: `${this.path}icons_pets.png`,
      router: '',
    },
    {
      label: 'Gaming',
      // icon:'fas fa-shopping-cart',
      icon: `${this.path}icons_gaming.png`,
      router: '',
    },
  ]
  constructor() {

  }

  ngOnInit(): void {
  }

}
