import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MissionContent} from "../../../models/missionContent";
import {MissionPreview} from "../../../models/missionPreview";

@Component({
    selector: 'app-missions',
    templateUrl: './missions.component.html',
    styleUrls: ['./missions.component.scss']
})

export class MissionsComponent implements OnInit {

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        this.fetch_mission();
    }

    missions_list: MissionPreview[] = [
        {
            title: "title",
            description: "description..",
            avatarURL: "https://www.magimix.com/webroot-mobile/img/loading.gif",
            lastUpdate: "0",
            id: "0",
            budget: "0",
        }
    ]

    private number_fetch: number = 6;
    private load_on_more: number = 10;

    fetch_mission(): void {
        this.httpClient
            .get<MissionPreview[]>('/data/missions/preview?start=0&end=' + this.number_fetch)
            .subscribe(
                (response) => {
                    this.missions_list = response;
                },
                (error) => {
                    console.log('Error : ', error);
                }
            );
    }

    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event: Event) {

        let total = document.documentElement.scrollHeight;
        let actual_position = document.documentElement.scrollTop;
        let size_of_screen = document.documentElement.clientHeight;

        if (total - actual_position < 2 * size_of_screen) {
            this.fetch_more();
        }

    }

    public loading = false;
    public end = false;

    fetch_more(): void {
        if (!this.loading && !this.end) {
            this.loading = true;
            this.httpClient
                .get<MissionPreview[]>('/data/missions/preview?start=' + (this.number_fetch).toString() + '&end=' + (this.number_fetch + this.load_on_more).toString())
                .subscribe(
                    (response) => {
                        this.missions_list = [...this.missions_list, ...response]
                        this.loading = false;
                        if (this.number_fetch + this.load_on_more == this.missions_list.length) {
                            this.number_fetch = this.missions_list.length;
                        } else
                            this.end = true;
                    },
                    (error) => {
                        console.log('Error : ', error);
                    }
                );
        }
    }

}
