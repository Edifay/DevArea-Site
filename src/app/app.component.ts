import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public connected = "not_connected";

  public page_theme = "dark_theme";

  public is_connected = false;


  member_infos = {
    isMember: true,
    id: '0',
    urlAvatar: '/assets/images/reseaux/discord.png',
    name: 'Disconnected',
    tag: 'Disconnected#0000',
    rank: 0,
    xp: 42,
    previous_xp_level: 0,
    next_xp_level: 0,
    level: 0,
    missions_list: [
      {
        title: "title",
        description: "description..",
        prix: "price",
        date_retour: "date de retour",
        langage: "langage utilisé",
        support: "le support utlisé",
        niveau: "le niveau requis",
        member_name: "pseudo du membre",
        avatar: "https://www.magimix.com/webroot-mobile/img/loading.gif",
        member_tag: "le tag du membre",
        message_id: "0"
      }
    ],
    badges: [
      {
        description: "description",
        name: "Nom du badge",
        url_icon: "https://www.magimix.com/webroot-mobile/img/loading.gif"
      }
    ]
  }

  constructor(private cookieService: CookieService, private httpClient: HttpClient) {
    this.takeInfos();
    if (this.cookieService.get('theme')) {
      this.page_theme = this.cookieService.get('theme');
    }
    // @ts-ignore
    document.getElementById("body").className = this.page_theme;
    console.log("Setup the theme")
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

  takeInfos() {
    if (this.cookieService.get('codeDiscord')) {
      this.httpClient
        .get<any>('/data/auth/get?code=' + this.cookieService.get('codeDiscord'))
        .subscribe(
          (response) => {
            if (response == null) {
              this.cookieService.delete('codeDiscord');
              this.connected = "not_connected";
            } else {
              this.member_infos = response;
              this.connected = "connected";
            }
          },
          (error) => {
            console.log('Error : ', error);
          }
        );
    } else
      this.connected = "not_connected";
  }

  reset(): void {
    this.member_infos = {
      isMember: true,
      id: '0',
      urlAvatar: '/assets/images/reseaux/discord.png',
      name: 'Disconnected',
      tag: 'Disconnected#0000',
      rank: 0,
      xp: 42,
      previous_xp_level: 0,
      next_xp_level: 0,
      level: 0,
      missions_list: [
        {
          title: "title",
          description: "description..",
          prix: "price",
          date_retour: "date de retour",
          langage: "langage utilisé",
          support: "le support utlisé",
          niveau: "le niveau requis",
          member_name: "pseudo du membre",
          avatar: "https://www.magimix.com/webroot-mobile/img/loading.gif",
          member_tag: "le tag du membre",
          message_id: "0"
        }
      ],
      badges: [
        {
          description: "description",
          name: "Nom du badge",
          url_icon: "https://www.magimix.com/webroot-mobile/img/loading.gif"
        }
      ]
    }
    this.takeInfos();
  }
}
