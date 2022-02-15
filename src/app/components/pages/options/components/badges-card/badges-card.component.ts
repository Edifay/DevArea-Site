import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from "../../../../../app.component";

@Component({
  selector: 'app-badges-card',
  templateUrl: './badges-card.component.html',
  styleUrls: ['./badges-card.component.scss']
})
export class BadgesCardComponent implements OnInit {

  constructor(public component: AppComponent) {
  }

  ngOnInit(): void {
  }

}
