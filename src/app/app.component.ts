import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FilterService } from './shared/services/filter.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Amazon';
  allcategory: any;
  currentLang: any;
  obj: { en: string, ar: string } = { en: 'english', ar: 'عربي' }
  constructor(private filter: FilterService,
    public translate: TranslateService) {

    this.filter.getProductByCategory('fashion').subscribe((data) => {
      console.log(data);
      this.allcategory = data;
    });
    this.currentLang = localStorage.getItem('currentLang') || 'en'
    this.translate.use(this.currentLang);
    this.translate.onLangChange.subscribe(()=>{
      console.log(this.translate);
      
    })

  }
  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }
}
