import {Component, Input, OnInit} from '@angular/core';
import {avis} from "../../../../../models/avis";
import {Router} from "@angular/router";

@Component({
    selector: 'app-avis-card',
    templateUrl: './avis-card.html',
    styleUrls: ['./avis-card.scss']
})
export class AvisCard  {
    @Input() avi: avis | undefined;

    constructor(private router: Router) {
    }

    public openProfile() {
        this.router.navigate(['/', "member-profile"], {queryParams: {member_id: this.avi!.id}});
    }


}
