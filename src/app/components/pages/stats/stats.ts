import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StatsService} from "../../../services/pagesServices/stats.service";
import {smoothAppear} from "../../../animations/smoothAppear";

export interface Language {
    name: string;
    countMember: string;
    color: string;
}

export interface XpMember {
    name: string;
    xp: number;
    rank: number;
    level: number;
    urlAvatar: string;
    id: string;
}

@Component({
    selector: 'app-stats',
    templateUrl: './stats.html',
    styleUrls: ['./stats.scss'],
    animations:[smoothAppear]
})

export class Stats implements OnInit {

    member_count: number | undefined;

    public languages: Language[] | undefined;
    bigString: string = '';

    public XpBoard: XpMember[] | undefined;
    public loading = false;
    public display_mode_button = "block;";


    languages_request: string = '';
    number: string = '1';
    public roles_id: string[] | undefined;

    constructor(private httpClient: HttpClient, private statsService: StatsService) {
        statsService.member_count$.subscribe(value => this.member_count = value);

        statsService.languages$.subscribe(value => this.languages = value);
        statsService.bigString$.subscribe(value => this.bigString = value);

        statsService.XpBoard$.subscribe(value => this.XpBoard = value);
        statsService.loading$.subscribe(value => this.loading = value);
        statsService.display_mode_button$.subscribe(value => this.display_mode_button = value);
    }

    ngOnInit(): void {
        this.statsService.update();
    }

    more() {
        this.statsService.more();
    }
}
