import {Component, OnInit} from '@angular/core';
import {App} from "../../../mainComponent/app";

@Component({
  selector: 'site-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit {

  public header_status = "invisible";

  constructor(public component: App) {
  }

  ngOnInit(): void {
  }

  openMenu() {
    if (this.header_status == "invisible") {
      this.header_status = "visible";
    } else {
      this.header_status = "invisible";
    }
  }

  close() {
    this.header_status = "invisible";
  }

}
