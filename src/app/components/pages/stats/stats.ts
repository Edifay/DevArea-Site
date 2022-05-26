import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-stats',
    templateUrl: './stats.html',
    styleUrls: ['./stats.scss']
})

export class Stats implements OnInit {

    languages = [
        {
            name: "Java",
            countMember: "0",
            color: 'd'
        },
        {
            name: "C/C++",
            countMember: "0",
            color: 'd'
        },
        {
            name: "Python",
            countMember: "0",
            color: 'd'
        },
        {
            name: "Lua",
            countMember: "0",
            color: 'd'
        },
        {
            name: "JavaScript",
            countMember: "0",
            color: 'd'
        },
        {
            name: "Html/Css",
            countMember: "0",
            color: 'd'
        },
        {
            name: "Php",
            countMember: "0",
            color: 'd'
        },
        {
            name: "Go",
            countMember: "0",
            color: 'd'
        },
        {
            name: "C#",
            countMember: "0",
            color: 'd'
        },
        {
            name: "Autres..",
            countMember: "0",
            color: 'd'
        },
        {
            name: "Hardware",
            countMember: "0",
            color: 'd'
        },
    ];

    roles_id = ["0"];

    constructor(private httpClient: HttpClient) {
        this.fetch_id_languages();
        this.fetch_xp();
        this.fetch_member_count();
    }

    ngOnInit(): void {
    }

    languages_request: string = '';
    number: string = '1';

    fetch_id_languages() {
        this.httpClient
            .get<any[]>('/assets/data/languages.json')
            .subscribe(data => {

                    this.roles_id = data;

                    this.number = this.roles_id.length.toString();

                    let list_of_ids = this.roles_id.join('","');
                    this.languages_request = '?roles="' + list_of_ids + '"';

                    this.fetch_languages();
                }
            );
    }

    fetch_languages() {
        this.httpClient
            .get<any[]>('/data/stats/rolesCount_list' + this.languages_request)
            .subscribe(
                (response) => {
                    this.languages = response;
                    this.bigger();
                },
                (error) => {
                    console.log('Error : ', error);
                }
            );
    }

    member_count: number = 1;

    fetch_member_count() {
        this.httpClient
            .get<number>('/data/stats/member_count' + this.languages_request)
            .subscribe(
                (response) => {
                    this.member_count = response;
                },
                (error) => {
                    console.log('Error : ', error);
                }
            );
    }

    big: number = 0;
    bigString: string = '';

    bigger() {
        for (var val of this.languages)
            if (+(val.countMember) > this.big)
                this.big = +(val.countMember);
        this.bigString = this.big.toString();
    }

    XpBoard = [
        {
            name: "Chargement...",
            xp: 0,
            rank: 0,
            level: 0,
            urlAvatar: 'https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif',
            id: "none"
        }
    ]

    private number_fetch = 10;
    private load_per_click = 50;

    fetch_xp() {
        this.httpClient
            .get<any[]>('/data/stats/xp_list?start=0&end=' + this.number_fetch.toString())
            .subscribe(
                (response) => {
                    this.XpBoard = response;
                },
                (error) => {
                    console.log('Error : ', error);
                }
            );
    }

    /*
    To prevent multiple load !
     */
    private loading = false;
    public display_mode_button = "block;";

    more(): void {
        if (!this.loading) {
            this.loading = true;
            this.httpClient
                .get<any[]>('/data/stats/xp_list?start=' + (this.number_fetch).toString() + '&end=' + (this.number_fetch + this.load_per_click).toString())
                .subscribe(
                    (response) => {
                        this.loading = false;
                        this.XpBoard = [...this.XpBoard, ...response]
                        if (this.number_fetch + this.load_per_click == this.XpBoard.length)
                            this.number_fetch = this.XpBoard.length;
                        else {
                            this.display_mode_button = "none";
                        }
                    },
                    (error) => {
                        console.log('Error : ', error);
                    }
                );
        }
    }

}
