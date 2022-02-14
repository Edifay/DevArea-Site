import {Component, Input, OnInit} from '@angular/core';
import {DiscordDataService} from 'src/app/services/discord-data.service';

@Component({
  selector: 'app-connexion-button',
  templateUrl: './connexion-button.component.html',
  styleUrls: ['./connexion-button.component.scss']
})
export class ConnexionButtonComponent implements OnInit {

  @Input() sourceImage: string = '/assets/images/reseaux/discord.png';

  constructor(private data: DiscordDataService) {
    data.setButton(this);
  }

  ngOnInit(): void {
    this.sourceImage = this.data.infos.urlAvatar;
  }

  update(): void {
    this.sourceImage = this.data.infos.urlAvatar;
  }

}
