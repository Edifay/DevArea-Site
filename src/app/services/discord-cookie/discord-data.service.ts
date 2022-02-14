import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from 'ngx-cookie-service';
import {ConnexionButtonComponent} from "../../components/global/connexion-button/connexion-button.component";

@Injectable({
  providedIn: 'root'
})
export class DiscordDataService {
  cookivalue: string = '';
  infos =
    {
      isMember: true,
      id: '0',
      urlAvatar: '/assets/images/reseaux/discord.png',
      name: 'Disconnected',
      rank: 0,
      xp: 42

    }

  private button: ConnexionButtonComponent | undefined;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    this.takeInfos();
  }

  takeInfos() {
    if (this.cookieService.get('codeDiscord')) {
      console.log(this.cookieService.get('codeDiscord'));
      this.cookivalue = '/data/auth/get' + this.cookieService.get('codeDiscord').substr(1);
      this.httpClient
        .get<any>(this.cookivalue)
        .subscribe(
          (response) => {
            this.infos = response;
            // @ts-ignore
            this.button.update();
            console.log("Fetched : " + this.infos.urlAvatar);
          },
          (error) => {
            console.log('Error : ', error);
          }
        )
    }
  }

  setButton(but: ConnexionButtonComponent): void {
    this.button = but;
  }

  ngOnInit(): void {
  };
}
