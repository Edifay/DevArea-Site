import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.scss']
})

export class StatsComponent implements OnInit {
    languages = [
        {
            name: "python",
            countMember: "1",
            color:'d'
        }
    ];

    rolesId=["0"];

    constructor(private httpClient: HttpClient) {
        this.try();
        this.getXpTop();



    }

    ngOnInit(): void {
        this.request1
    }
    request1:string='';
    number:string='1';

    try(){
        this.httpClient
            .get<any[]>('/assets/data/languages.json')
            .subscribe(data =>{
                this.rolesId=data;
                this.number=this.rolesId.length.toString();
                console.log("Ici : ", this.number)
                this.request1=this.rolesId.join('","');
                this.request1 = '?roles="'+this.request1+'"';
                this.getLanguages();

            })
    }

    getLanguages() {
        this.httpClient
            .get<any[]>('/data/stats/rolesCount_list'+this.request1)
            .subscribe(
                (response) => {
                    this.languages = response;
                    this.bigger();
                    console.log(this.big);
                },
                (error) => {
                    console.log('Error : ', error);
                }

            )

    }
    big:number=0;
    bigString:string='';
    bigger(){
        for (var val of this.languages){
            //console.log(val)
            if (+(val.countMember)>this.big){
                this.big=+(val.countMember);
            }
        }
        this.bigString=this.big.toString();
        console.log(this.bigString);

    }
    XpBoard=[
        {
            name:"Stramis",
            xp:100000000,
            rank:0,
            urlAvatar:'https://cdn.discordapp.com/avatars/561583871183814666/4d65f82988f7f8ae2f2f6479796a5a81.png'

        }
    ]
    getXpTop(){
        this.httpClient
            .get<any[]>('/data/stats/xp_list?start=0&end=5')
            .subscribe(
                (response)=>{
                    this.XpBoard=response;
                    console.log(this.XpBoard)
                },
                (error)=>{
                    console.log('Error : ', error);
                }


            )
    }


}
