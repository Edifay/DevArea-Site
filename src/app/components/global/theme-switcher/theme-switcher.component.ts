import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  constructor(public component: AppComponent) {
  }

  ngOnInit(): void {
  }

}
