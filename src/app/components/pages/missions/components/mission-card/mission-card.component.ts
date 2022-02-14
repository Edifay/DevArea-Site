import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-mission-card',
  templateUrl: './mission-card.component.html',
  styleUrls: ['./mission-card.component.scss']
})
export class MissionCardComponent implements OnInit {

  @Input() title: string = "Titre";
  @Input() description: string = "Description.."
  @Input() prix: string = "prix";
  @Input() date_retour: string = "date de retour";
  @Input() langage: string = "langage";
  @Input() support: string = "support";
  @Input() niveau: string = "niveau";
  @Input() member_name: string = "Nom";
  @Input() avatar: string = "https://www.magimix.com/webroot-mobile/img/loading.gif";
  @Input() member_tag: string = "idk#8888";
  @Input() message_id: string = "0";

  text_copy = "Copy Tag";

  constructor(private http_client: HttpClient, private cookie: CookieService) {
  }

  ngOnInit(): void {
  }

  myFunction() {
    navigator.clipboard.writeText(this.member_tag);
    this.text_copy = "Copied: " + this.member_tag;
  }

  outFunc() {
    this.text_copy = "Copy Tag";
  }

  public text_send = "Récupérer le message par MP."
  private is_sending = false;

  requestMessageFromBot(): void {
    if (!this.is_sending)
      if (this.cookie.get("codeDiscord")) {
        this.is_sending = true;
        let message_at_send = "La message lié à la mission transféré est : " + "https://discord.com/channels/768370886532137000/768855632224190496/" + this.message_id + ". Ce message peut avoir été supprimé ou modifier depuis.";
        this.text_send = "Envois..";
        this.http_client
          .get<string[]>("/data/global/send_message_by_discord/?message=" + message_at_send + "&code=" + this.cookie.get("codeDiscord"))
          .subscribe(
            (response) => {
              if (response[0] == "send")
                this.text_send = "Le message a été envoyé.";
              else if (response[0] == "send_error")
                this.text_send = "Un problème est survenu lors de l'envois. (Ouvrez vos MP)";
              else if (response[0] == "couldown")
                this.text_send = "Vous devez attendre 5s entre chaque envois.";
              else if (response[0] == "wrong_code")
                this.text_send = "L'authentification n'a pas pu être effectué.";
              this.is_sending = false;
            },
            (error) => {
              console.log('Error : ', error);
            }
          )
      } else {
        this.text_send = "Vous devez vous connecté à votre compte discord.";
      }
  }

  requestMessageOut(): void {
    this.text_send = "Récupérer le message par MP."
  }

}
