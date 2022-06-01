import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebFreelancePreview} from "../../../models/WebFreelancePreview";
import {MissionPreview} from "../../../models/missionPreview";

@Component({
    selector: 'app-freelances',
    templateUrl: './freelances.html',
    styleUrls: ['./freelances.scss']
})
export class Freelances implements OnInit {
    public freelances: WebFreelancePreview[] | undefined;


    constructor(private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        this.load();
    }

    private number_fetch: number = 10;
    private load_on_more: number = 10;

    public load() {
        this.loading = true;
        this.httpClient
            .get<WebFreelancePreview[]>('/data/freelances/preview?start=0&end=' + this.number_fetch)
            .subscribe(
                (response) => {
                    this.freelances = response;
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
                .get<WebFreelancePreview[]>('/data/freelances/preview?start=' + (this.number_fetch).toString() + '&end=' + (this.number_fetch + this.load_on_more).toString())
                .subscribe(
                    (response) => {
                        if (this.freelances != undefined) {
                            this.freelances = [...this.freelances, ...response]
                            this.loading = false;
                            if (this.number_fetch + this.load_on_more == this.freelances.length) {
                                this.number_fetch = this.freelances.length;
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
