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
  @Input() staff_id:string='pair';
  constructor() { }

  ngOnInit(): void {
  }
  getSize(){
    if (this.staff_name.length>10){
      return '22px';
    }
    else if (this.staff_name.length>7){
      return '25px';
    }

    else{
      return '30px';
    }
  }

  getDescriptionSize(){
    if (this.staff_bio.length>240){
      return '10.5px';
    }
    else{
      return '13px';
    }
  }
}
