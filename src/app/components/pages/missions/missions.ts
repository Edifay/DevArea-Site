import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MissionPreview} from "../../../models/missionPreview";

@Component({
    selector: 'app-missions',
    templateUrl: './missions.html',
    styleUrls: ['./missions.scss']
})

export class Missions implements OnInit {

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        this.fetch_mission();
    }

    missions_list: MissionPreview[] | undefined;

    private number_fetch: number = 10;
    private load_on_more: number = 10;

    fetch_mission(): void {
        this.loading = true;
        this.httpClient
            .get<MissionPreview[]>('/data/missions/preview?start=0&end=' + this.number_fetch)
            .subscribe(
                (response) => {
                    this.missions_list = response;
                    this.loading = false;
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
                        if (this.missions_list) {

                            this.missions_list = [...this.missions_list, ...response]
                            this.loading = false;
                            if (this.number_fetch + this.load_on_more == this.missions_list.length) {
                                this.number_fetch = this.missions_list.length;
                            } else
                                this.end = true;
                        }
                    },
                    (error) => {
                        console.log('Error : ', error);
                    }
                );
        }
    }

}
