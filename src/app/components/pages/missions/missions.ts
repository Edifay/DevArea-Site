import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MissionPreview} from "../../../models/missionPreview";
import {MissionsService} from "../../../services/pagesServices/missions.service";

@Component({
    selector: 'app-missions',
    templateUrl: './missions.html',
    styleUrls: ['./missions.scss']
})

export class Missions implements OnInit {

    missions_list: MissionPreview[] | undefined;
    public loading = false;
    public end = false;

    constructor(private httpClient: HttpClient, public missionsService: MissionsService) {
        this.missionsService.missions_list$.subscribe(value => this.missions_list = value);
        this.missionsService.loading$.subscribe(value => this.loading = value);
        this.missionsService.end$.subscribe(value => this.end = value);
    }

    ngOnInit(): void {
        this.missionsService.update();
    }



    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event: Event) {

        let total = document.documentElement.scrollHeight;
        let actual_position = document.documentElement.scrollTop;
        let size_of_screen = document.documentElement.clientHeight;

        if (total - actual_position < 2 * size_of_screen) {
            this.missionsService.fetch_more();
        }

    }

}
