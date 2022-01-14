import { StoreService } from './shared/services/store.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  arr = [
    {
      name: 'sabrien',
      age: 30
    },
    {
      name: 'Amr',
      age: 15
    },
    {
      name: 'Saher',
      age: 25
    }
  ]
 
  title = 'Amazon';
  overlay:boolean=false;
  isVisible: boolean = false;
  showHeader = true;
  constructor(public router: Router,private storeServ: StoreService) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = ['/auth/login', '/auth/signup', '/admin', '/admin/products',
          '/admin/users', '/admin/dashboard'].includes(this.router.url);
      }
    });
  } 
  ngOnInit(): void {
    this.storeServ.getOverlayistner().subscribe((response)=>{
      this.overlay=response;
    })
  }

 

}
