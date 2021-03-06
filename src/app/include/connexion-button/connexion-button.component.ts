import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {HttpClient} from "@angular/common/http";
import {DiscordDataConnectionService} from './services/discord-data-connection.service';
@Component({
  selector: 'app-connexion-button',
  templateUrl: './connexion-button.component.html',
  styleUrls: ['./connexion-button.component.scss']
})
export class ConnexionButtonComponent implements OnInit {
  @Input() sourceImage:string='/assets/images/reseaux/discord.png';



  constructor(private DiscordData: DiscordDataConnectionService) {


  }

  ngOnInit(): void {
    this.sourceImage=this.DiscordData.infos.urlAvatar;

  }


}
