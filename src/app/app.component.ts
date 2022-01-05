// import { FilterService } from './shared/services/filter.service';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IProduct } from './shared/interfaces/product';
import { FilterService } from './shared/services/filter.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  



  title = 'Amazon';
  // allcategory: any;
  // currentLang: any;
  // obj: { en: string, ar: string } = { en: 'english', ar: 'عربي' };

  isVisible: boolean = false;
  showHeader = true;
  constructor(public router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log('this.router.url', this.router.url);
        this.showHeader = ['/auth/login', '/auth/signup','/admin','/admin/products',
      '/admin/users','/admin/dashboard'].includes(this.router.url);
      }
    });
  } // note you have to use Public because you are using it in html file too.

//   onScroll(event: any) {
//     this.isVisible = this.scrollTop < event.target.scrollTop;
//   }
//   constructor(
//     public translate: TranslateService, private filterServe:FilterService) {
//     this.currentLang = localStorage.getItem('currentLang') || 'en'
//     this.translate.use(this.currentLang);
//     this.translate.onLangChange.subscribe(()=>{
//       // console.log(this.translate);
//     })

//   }
ngOnInit(): void {

}
//   changeCurrentLang(lang: string) {
//     this.translate.use(lang);
//     localStorage.setItem('currentLang', lang);
//   }


}
