import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() description: string = "description";
  @Input() name: string = "nom du badge";
  @Input() url_icon: string = "https://www.magimix.com/webroot-mobile/img/loading.gif";

  constructor() { }

  ngOnInit(): void {
  }

}
