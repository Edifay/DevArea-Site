import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {
  private cookieValue:string='';

  constructor(private cookieService:CookieService) { }

  ngOnInit(): void {
    this.cookieValue=this.cookieService.get('codeDiscord');
    console.log(this.cookieValue);
  }

}
