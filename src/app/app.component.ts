// import { FilterService } from './shared/services/filter.service';
import { Component, OnInit } from '@angular/core';
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
  allcategory: any;
  currentLang: any;
  obj: { en: string, ar: string } = { en: 'english', ar: 'عربي' };

  constructor(
    public translate: TranslateService, private filterServe:FilterService) {
    this.currentLang = localStorage.getItem('currentLang') || 'en'
    this.translate.use(this.currentLang);
    this.translate.onLangChange.subscribe(()=>{
      // console.log(this.translate);
    })

  }
ngOnInit(): void {

}
  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }


}
