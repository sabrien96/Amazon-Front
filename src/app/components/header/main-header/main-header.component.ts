import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilterService } from '../../../shared/services/filter.service';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {


  private isLoginsub: Subscription = new Subscription;
  isLogin: boolean = false;

  lenghtOfItems: number = 0;
  auth = false;
  username: string = '';
  SearchForm = this.formBuilder.group({
    search: ['', Validators.required],
  });
  constructor(
    private router: Router,
    private filterServe: FilterService,
    private formBuilder: FormBuilder,

    // private localStorage:LocalStorageService
  ) { }
  @Input()
  isVisible = false;
  isOpen = false;
  showSearch = false;
  categeories: any;
  subCategeories = [
    'menWear',
    'womenWear',
    'kidWear',
    'mobiles',
    'labtops',
    'tv',
    'kitchen',
    'homeDecor',
    'furniture',
    'makeup',
    'skinCare',
    'hairCare',
  ];
  go() {
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    //check user login or not
    // this.isLoginsub = false;

    this.getCategories();
    // this.getNumberOfCarts();

  }
  
  menuLisItems = [
    {
      id: 1,
      label: 'My Orders',
      routerLink: '/user-properties/orders',
    },
    {
      id: 2,
      label: 'My Addresses',
      routerLink: '/user-properties/shipping-address',
    },
    {
      id: 3,
      label: 'Wish Lists',
      routerLink: '/user-properties/wish-lists',
    },
    {
      id: 4,
      label: 'Account Settings',
      routerLink: '/Settings',
    },
    {
      id: 5,
      label: 'Account Summary',
      routerLink: '/Summary',
    },
  ];

  ngOnChanges(changes: any) {
    this.isVisible = changes.isVisible.currentValue;
    // this.getUserame();
  }
  openNav() {
    this.isOpen = !this.isOpen;
    // let body = document.getElementsByTagName('body')[0];
    // body.classList.add('body-landing');
  }
  closeNav() {
    this.isOpen = false;
  }

  itemPress(item: any) {
    console.log("item pressed", item.id);

    this.router.navigate([item.routerLink, item.id]);
  }
  navigateToForm(index: any) {
    switch (index) {
      case 1:
        this.router.navigate(['/auth/signup']);
        break;
      case 2:
        this.router.navigate(['/auth/login']);
        break;
    }
  }
  navigateToCart() {
    this.router.navigate(['/shopping_cart']);
  }
  showHideSearch() {
    this.showSearch = !this.showSearch;
  }
  //get data to filter
  //get all categories
  getCategories() {
    this.filterServe.getAllCategory().subscribe(
      (data) => {
        this.categeories = data;
        // console.log('all my categories', this.categeories);
      },
      (err) => {
        console.log('from header: ', err);
      }
    );
  }
  //get subCategories

  search(search: string) {
    console.log(search);
    let filterCategory = this.categeories.filter((item: any, index: any) => {
      return item.name.toLowerCase().match(search.toString().toLowerCase());
    });
    if (filterCategory[0] != null) {
      let cateName =
        filterCategory[0]['name'].charAt(0).toUpperCase() +
        filterCategory[0]['name'].slice(1);
      console.log(' search category for ' + filterCategory[0]['cateid']);
      this.router.navigate([`/${cateName}/${filterCategory[0]['cateid']}`]);
    } else {
      var filterSub = this.subCategeories.filter((item: any, index: any) => {
        return item
          .toLocaleLowerCase()
          .match(search.toString().toLocaleLowerCase());
      });
      if (filterSub[0] != null) {
        console.log('subcate search for ' + filterSub[0]);
        this.router.navigate([`/filter/${filterSub[0]}`]);
      } else {
        console.log('not found');
        this.router.navigate([`/not-found`]);
      }
    }
  }
  // filteraion for search
  onEnterSearch(form: any) {
    //this.search();
    if (form.valid) {
      this.search(form.value.search);
    }
  }
  searchPress(form: any) {
    if (form.valid) {
      this.search(form.value.search);
    }
  }


  ngOnDestroy(): void {
    this.isLoginsub.unsubscribe()
  }
  logout() {
    this.auth = false;
    this.username = "";

  }

}
