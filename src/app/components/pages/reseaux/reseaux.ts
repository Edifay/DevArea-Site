import { Component, OnInit } from '@angular/core';
import {formatNumber} from "@angular/common";
import{HttpClient} from "@angular/common/http";
import {smoothAppear} from "../../../animations/smoothAppear";

@Component({
  selector: 'app-reseaux',
  templateUrl: './reseaux.html',
  styleUrls: ['./reseaux.scss'],
  animations:[smoothAppear]
})
export class Reseaux implements OnInit {
  openTab:boolean=false;
  reseaux=[
    {
      name: "youtube",
      url: "/assets/images/reseaux/youtube.png",
      description:"None",
      index:0
    },
    {
      name: "twitter",
      url: "/assets/images/reseaux/twitter.png",
      description:"None",
      index:1
    },
    {
      name: "discord",
      url:"/assets/images/reseaux/discord.png",
      description:"None",
      index:2
    },
    {
      name:"github",
      url:"/assets/images/reseaux/github.jpg",
      description:"None",
      index:3
    },
    {
      name:"IncoName",
      url:"/assets/images/reseaux/twitter.png",
      description:"None",
      index:4
    },
    {
      name:"IncoName2",
      url:"/assets/images/reseaux/profilBot.jpg",
      description:"None",
      index:5
    },
    {
      name:"powerReset",
      url:"/assets/images/reseaux/power.png",
      description:"None",
      index:6
    },
    {
      name: "instagram",
      url:"/assets/images/reseaux/instagram.png",
      description:"None",
      index:7
    }
  ]
  /*reseaux=[
    {
      name:"no",
      url:'no',
      index:-1
    }
  ];*/


  returnClass(index: number, text:string, angle:number){
    angle=angle*index;
    text=text+angle.toString();
    return text;
  }

  indexGen : number=0;
  changeOrder(index: number){
    console.log("Index : ",index);
    this.indexGen=index;

  }
  angle:number=45;



  constructor(private httpClient: HttpClient) {/*this.getReseaux()*/ }

  ngOnInit(): void {
  }










  /*getReseaux(){
    this.httpClient
      .get<any[]>('http://193.26.14.69:8192/links_list')
      .subscribe(
        (response)=>{
          this.reseaux=response;
        },
        (error)=>{
          console.log('Problem : '+error);

        }
      )
  }*/

}
