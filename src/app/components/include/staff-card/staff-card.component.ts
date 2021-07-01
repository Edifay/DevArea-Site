import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.scss']
})
export class StaffCardComponent implements OnInit {
  @Input() staff_name:string="John";
  @Input() staff_bio:string="Nope";
  @Input() staff_urlAvatar:string="http://devarea.fr/assets/images/profilBot.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
