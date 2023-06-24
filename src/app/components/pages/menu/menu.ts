import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CookieService} from 'ngx-cookie-service';
import {MemberService} from "../../../services/member.service";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class Menu implements OnInit {
  @Input() pseudo: string = '';

  nav() {
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=579257697048985601&redirect_uri=https%3A%2F%2Fdevarea.fr%2Fdata%2Fauth&response_type=code&scope=identify';

  }

  constructor(private router: Router, private route: ActivatedRoute, private cookieService: CookieService, private service: MemberService) {
  }

  ngOnInit(): void {
    this.loadQueryParams();
  }

  async loadQueryParams(): Promise<void> {
    if (this.route.snapshot.queryParams['code'] != undefined) {
      this.cookieService.set('codeDiscord', this.route.snapshot.queryParams['code']);
      this.service.connected$.subscribe(value => {
        this.redirect();
      });
      this.service.loadInfos();
      await this.router.navigate([], {
        queryParams: {
          'code': null
        },
        queryParamsHandling: 'merge'
      });
    } else {
      await this.redirect();
    }
  }

  async redirect(): Promise<void> {
    if (this.route.snapshot.queryParams['redirect'] != undefined) {
      console.log("Calling to move : " + this.service.connected$.getValue());
      await this.router.navigate([this.route.snapshot.queryParams['redirect']], {
        queryParams: {
          'redirect': null
        },
        queryParamsHandling: 'merge'
      });
    }
  }

}
