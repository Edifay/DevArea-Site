import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject} from 'rxjs';
import {MemberInfos} from '../models/member-infos';
import {MarkdownService} from "ngx-markdown";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  memberInfos$ = new BehaviorSubject<MemberInfos | undefined>(undefined);

  connected$ = new BehaviorSubject("connected");

  public code: string | undefined;

  constructor(private _cookieService: CookieService, private _httpClient: HttpClient, private markdownService: MarkdownService) {
    this.loadInfos();
    const linkRenderer = this.markdownService.renderer.link;
    this.markdownService.renderer.link = (href, title, text) => {
      const html = linkRenderer.call(this.markdownService.renderer, href, title, text);
      return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
    };
  }

  reset() {
    const memberInfos = undefined;
    this.memberInfos$.next(memberInfos);
    this.loadInfos();
  }

  loadInfos() {
    if (this._cookieService.get('codeDiscord')) {
      this.code = this._cookieService.get('codeDiscord');
      this._httpClient
        .get<MemberInfos>('/data/auth/get?code=' + this.code)
        .subscribe({
          next: (response) => {
            if (response == null) {
              this._cookieService.delete('codeDiscord');
              this.connected$.next("not_connected");
            } else {
              this.memberInfos$.next(response);
              this.connected$.next("connected");
            }
          },
          error: (err) => {
            console.log('Error : ', err);
          }
        });
    } else {
      this.connected$.next("not_connected");
    }
  }
}
