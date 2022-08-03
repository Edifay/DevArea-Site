import {Component, Input, OnInit} from '@angular/core';
import {WebFreelancePreview} from "../../../../../models/WebFreelancePreview";
import {Router} from "@angular/router";
import {tabs} from "../../../options/options";

@Component({
    selector: 'app-freelance-preview',
    templateUrl: './freelance-preview.html',
    styleUrls: ['./freelance-preview.scss']
})
export class FreelancePreview implements OnInit {
    @Input() public preview: WebFreelancePreview | undefined;
    public abilities: String[] = [];

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        if (this.preview != undefined) {
            if (this.preview.abilities.length > 5) {
                this.abilities = this.preview.abilities.slice(0, 5);
                this.abilities.push("...");
            } else {
                this.abilities = this.preview.abilities;
            }
        }
    }

    public openProfile() {
        this.router.navigate(['/', "member-profile"], {
            queryParams: {
                member_id: this.preview?.member_id,
                open: tabs.Freelance
            }
        });
    }

}
