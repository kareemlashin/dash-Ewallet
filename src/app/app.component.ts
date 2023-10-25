import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  condition: any = true;
  currentItem = ''

  form = new FormGroup({
    currentItem: new FormControl('')
  })
  constructor (public router: Router, public translate: TranslateService) {

    translate.addLangs(['ar', 'en']);
    let defaultLang: any = "ar";
    localStorage.getItem('lang') == undefined ? localStorage.setItem('lang', defaultLang) : defaultLang = localStorage.getItem('lang');
    if (defaultLang == 'ar') {
      document.getElementsByTagName('html')[0].setAttribute('dir', "rtl");
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir', "ltr");
    }
    translate.setDefaultLang(defaultLang);

  }
  ngOnInit(): void {
    setInterval(() => {
      // this.condition=!this.condition;
    }, 10)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      setTimeout(() => { window.scrollTo(0, 0); }, 10);
    });

    this.form.get("currentItem")?.valueChanges.subscribe((res: any) => {
    })
  }






}
