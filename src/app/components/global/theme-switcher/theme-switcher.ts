import {Component, OnInit} from '@angular/core';
import {App} from "../../../mainComponent/app";

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.html',
  styleUrls: ['./theme-switcher.scss']
})
export class ThemeSwitcher implements OnInit {

  constructor(public component: App) {
  }

  ngOnInit(): void {
  }
}
