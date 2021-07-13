import { Injectable } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class DiscordDataService {
  cookivalue:string='';
  infos=
      {
        isMember:true,
        id:'0',
        urlAvatar:'/assets/images/reseaux/discord.png',
        name:'Disconnected',
        rank:0,
        xp:42

      }
  constructor(private httpClient:HttpClient, private cookieService:CookieService) {
    this.takeInfos();
  }

  takeInfos(){

    if(this.cookieService.get('codeDiscord')){


      console.log(this.cookieService.get('codeDiscord'));
      this.cookivalue='/data/auth/get'+this.cookieService.get('codeDiscord').substr(1);
      this.httpClient
          .get<any>(this.cookivalue)
          .subscribe(
              (response)=>{
                this.infos=response;


              },
              (error)=>{
                console.log('Error : ',error);
              }
          )

      //this.source=this.infos.urlAvatar;

    }
  }
  ngOnInit(): void {};
}
