import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public header_status = "invisible";

  constructor(public component: AppComponent) {
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
