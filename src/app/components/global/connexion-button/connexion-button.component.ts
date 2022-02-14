import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-connexion-button',
  templateUrl: './connexion-button.component.html',
  styleUrls: ['./connexion-button.component.scss']
})
export class ConnexionButtonComponent implements OnInit {

  @Input() sourceImage: string = '/assets/images/reseaux/discord.png';
  @Input() name: string = "Not_connected";
  @Input() style_on_connection_change = "not_connected";

  public visibility_menu = "hidden";

  constructor(private component: AppComponent, private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  openMenu(): void {
    this.visibility_menu = "visible";
  }

  closeMenu(): void {
    this.visibility_menu = "hidden";
  }

  connection() {
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=579257697048985601&redirect_uri=https%3A%2F%2Fdevarea.fr%2Fdata%2Fauth&response_type=code&scope=identify';
  }

  disconnection() {
    this.cookieService.delete('codeDiscord');
    this.component.reset();
  }


}
