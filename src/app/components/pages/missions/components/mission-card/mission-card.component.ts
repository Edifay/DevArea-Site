import {Component, Input, OnInit} from '@angular/core';

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

  text_copy = "Copy Tag";

  constructor() {
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

}
