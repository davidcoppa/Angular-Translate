import { Component, OnChanges, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  value='Have a good day!!';

  language = this.translate.getDefaultLang();
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);


    var lng = translate.getBrowserLang();
  //  console.log(lng);
    if (lng != undefined) {
      if (lng == 'es' || lng == 'en') {
        translate.setDefaultLang(lng);
      } else {
        translate.setDefaultLang('en');

      }
    } else {
      translate.setDefaultLang('en');

    }




   }



  switchLang(lang: string) {
    this.translate.use(lang);
    this.language=lang;

  }



}
