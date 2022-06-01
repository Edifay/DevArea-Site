import {Component, Input, OnInit} from '@angular/core';
import {NONE_TYPE} from "@angular/compiler";
import {Router} from "@angular/router";

@Component({
    selector: 'app-xp-top-rank',
    templateUrl: './xp-top-rank.html',
    styleUrls: ['./xp-top-rank.scss']
})
export class XpTopRank implements OnInit {
    @Input() url: string = 'https://www.magimix.com/webroot-mobile/img/loading.gif'
    @Input() pseudo: string = 'Name';
    @Input() rank: number = 0;
    @Input() xp: number = 0;
    @Input() id: string = "none";
    @Input() trophy: string = '';
    @Input() level: number = 0;

    constructor(private router: Router) {

    }

    ngOnInit(): void {
        this.trophy_test()
    }

    trophy_test() {
        if (this.rank === 1)
            this.trophy = '🏆';
        else if (this.rank === 2)
            this.trophy = '🥈';
        else if (this.rank === 3)
            this.trophy = '🥉';
        else
            this.trophy = "" + this.rank;
    }

    public openProfile() {
        this.router.navigate(['/', "member-profile"], {queryParams: {member_id: this.id}});
    }

}
