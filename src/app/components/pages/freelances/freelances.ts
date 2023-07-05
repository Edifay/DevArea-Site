import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WebFreelancePreview} from "../../../models/WebFreelancePreview";
import {FreelancesService} from "../../../services/pagesServices/freelances.service";
import {smoothAppear} from "../../../animations/smoothAppear";

@Component({
    selector: 'app-freelances',
    templateUrl: './freelances.html',
    styleUrls: ['./freelances.scss'],
    animations:[smoothAppear]
})
export class Freelances implements OnInit {
    public freelances: WebFreelancePreview[] | undefined;
    public loading = false;
    public end = false;


    constructor(private httpClient: HttpClient, public freelancesService : FreelancesService) {
        freelancesService.freelances$.subscribe(value => this.freelances = value);
        freelancesService.loading$.subscribe(value => this.loading = value);
        freelancesService.end$.subscribe(value => this.end = value);
    }

    ngOnInit(): void {
        this.freelancesService.update();
    }


    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event: Event) {

        let total = document.documentElement.scrollHeight;
        let actual_position = document.documentElement.scrollTop;
        let size_of_screen = document.documentElement.clientHeight;

        if (total - actual_position < 2 * size_of_screen) {
            this.freelancesService.fetch_more();
        }

    }

}
