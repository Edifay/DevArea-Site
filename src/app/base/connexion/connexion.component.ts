import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  connected:boolean=false;
  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
    this.test_connection();
  }
  //Temporaire pour faire le style
  test_connection(){
    if(this.cookieService.get('codeDiscord')){
      this.connected=true;
      console.log('connecté')
    }

  }
  connection(){
    this.connected=true;
    window.location.href='https://discord.com/api/oauth2/authorize?client_id=579257697048985601&redirect_uri=https%3A%2F%2Fdevarea.fr%2Fdata%2Fauth&response_type=code&scope=identify';
  }
  deconnection(){
    this.cookieService.delete('codeDiscord');
    this.connected=false;
  }

}
