import { Component, Input, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() pseudo:string='';
  private cookieValue:string='';
  nav(){
    window.location.href='https://discord.com/api/oauth2/authorize?client_id=579257697048985601&redirect_uri=https%3A%2F%2Fdevarea.fr%2Fdata%2Fauth&response_type=code&scope=identify';

  }
  constructor(private router:Router, private cookieService:CookieService) { }

  ngOnInit(): void {
    console.log(this.router.url)
    if (this.router.url.startsWith('/?code=')){
      console.log('Utilisateur identifié !');
      this.cookieService.set('codeDiscord', this.router.url);
      this.cookieValue=this.cookieService.get('codeDiscord');

    }
  }

}
