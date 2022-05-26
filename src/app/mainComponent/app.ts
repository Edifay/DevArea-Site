import {Component, enableProdMode, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from 'ngx-cookie-service';
import {MemberService} from "../services/member.service";
import {MemberInfos} from "../models/member-infos";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  memberInfos: MemberInfos | undefined;
  connected: any;

  public page_theme = "dark_theme";

  constructor(private cookieService: CookieService, private _memberService: MemberService) {
    enableProdMode();
    this._memberService.memberInfos$.subscribe({
      next: (memberInfos) => this.memberInfos = memberInfos
    })

    this._memberService.connected$.subscribe({
      next: (connected) => this.connected = connected
    })

    if (this.cookieService.get('theme'))
      this.page_theme = this.cookieService.get('theme');
    // @ts-ignore
    document.getElementById("body").className = this.page_theme;
  }

  switch_theme(): void {
    if (this.page_theme == "dark_theme") {
      this.page_theme = "light_theme";
      this.cookieService.set('theme', 'light_theme');
    } else {
      this.page_theme = "dark_theme";
      this.cookieService.set('theme', 'dark_theme');
    }
    // @ts-ignore
    document.getElementById("body").className = this.page_theme;
  }
}
