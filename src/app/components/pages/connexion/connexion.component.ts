import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  connected: boolean = false;

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.test_connection();
  }

  //Temporaire pour faire le style
  test_connection() {
    if (this.cookieService.get('codeDiscord'))
      this.connected = true;
  }

}
