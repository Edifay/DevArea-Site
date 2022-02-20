import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {AppComponent} from "../../../../../app.component";
import {MemberService} from "../../../../../services/member.service";

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
  @Input() own: string = "false";

  text_copy = "Copy Tag";

  constructor(private http_client: HttpClient, private cookie: CookieService, private service: MemberService) {
  }

  ngOnInit(): void {
  }

  myFunction() {
    //navigator.clipboard.writeText(this.member_tag);
    //this.text_copy = "Copied: " + this.member_tag;
    this.text_copy = "Une erreur est survenue lors de la copie de: " + this.member_tag;
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
        let message_at_send = "Le message lié à la mission transféré est : " + "https://discord.com/channels/768370886532137000/943817647060025354/" + this.message_id + ". Ce message peut avoir été supprimé ou modifier depuis.";
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

  public text_delete = "Cliquez-ici pour supprimer votre mission";
  public delete_button = "false";

  appearButton(): void {
    this.text_delete = "ATTENTION: action est irréversible.";
    this.delete_button = "delete_button";
  }

  requestDeleteMission(): void {
    console.log("Clicked !");
    this.text_delete = "Suppression en cour...";
    this.delete_button = "false";
    this.http_client
      .get<string[]>("/data/missions/delete/?message_id=" + this.message_id + "&code=" + this.cookie.get("codeDiscord"))
      .subscribe(
        (response) => {
          if (response[0] == "deleted") {
            this.text_delete = "La mission a été supprimé.";
            this.service.loadInfos();
          } else if (response[0] == "mission_not_find")
            this.text_delete = "Cette mission n'as pas été trouvé.";
          else if (response[0] == "wrong_code")
            this.text_delete = "L'authentification n'a pas pu être effectué.";
        },
        (error) => {
          console.log('Error : ', error);
        }
      )
  }

  requestDeleteMissionOut(): void {
    this.text_delete = "Cliquez-ici pour supprimer votre mission";
    this.delete_button = "false";
  }

}
