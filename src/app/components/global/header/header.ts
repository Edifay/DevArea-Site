import {Component, OnInit} from '@angular/core';
import {App} from "../../../mainComponent/app";
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'site-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit {

  public header_status = "invisible";

  constructor(public component: App, private cookieService: CookieService) {
    if (this.cookieService.get('custom') && this.cookieService.get('theme') == 'custom_theme') {
      let custom = JSON.parse(this.cookieService.get('custom'));
      let actualTheme = this.cookieService.get('theme');
      // change the css variables of the modules
      var themeElement:HTMLElement = document.getElementsByClassName(actualTheme)[0] as HTMLElement; 
      themeElement.style.setProperty('--background-color', custom.background);
      themeElement.style.setProperty('--background-component-color', custom.modules);
      themeElement.style.setProperty('--main-text-color', custom.textes);
      themeElement.style.setProperty('--main-title-contrast-color', custom.titles);
      themeElement.style.setProperty('--main-title-color', custom.titles);
      themeElement.style.setProperty('--main-color', custom.buttonsIna);
      themeElement.style.setProperty('--main-color-hover', custom.buttonsHover);
      themeElement.style.setProperty('--main-color-active', custom.buttonsAct);
     }
  }

  ngOnInit(): void {
  }

  openMenu() {
    if (this.header_status == "invisible") {
      this.header_status = "visible";
    } else {
      this.header_status = "invisible";
    }
  }

  close() {
    this.header_status = "invisible";
  }

}
