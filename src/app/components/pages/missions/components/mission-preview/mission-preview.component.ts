import {Component, Input, OnInit} from '@angular/core';
import {MissionContent} from "../../../../../models/missionContent";
import {Router} from "@angular/router";

@Component({
    selector: 'app-mission-preview',
    templateUrl: './mission-preview.component.html',
    styleUrls: ['./mission-preview.component.scss']
})
export class MissionPreviewComponent implements OnInit {

    @Input() public title: string = "Title";
    @Input() public id: string = "0";
    @Input() public last_update: string = "0";
    @Input() public description: string = "";
    @Input() public posterUrl: string = "";
    @Input() public budget: string = "0";


    constructor(private router: Router) {
    }

    ngOnInit(): void {
        if (this.description.length > 90) {
            this.description = this.description.substring(0, 90) + "...";
        }
    }

    open() {
        this.router.navigate(['/', "mission"], {queryParams: {id: this.id}});
    }

}
