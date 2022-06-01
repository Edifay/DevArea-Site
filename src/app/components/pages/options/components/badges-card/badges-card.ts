import {Component, Input, OnInit} from '@angular/core';
import {MemberService} from "../../../../../services/member.service";
import {MemberInfos} from "../../../../../models/member-infos";
import {Badge} from "../../../../../models/badge";

@Component({
    selector: 'app-badges-card',
    templateUrl: './badges-card.html',
    styleUrls: ['./badges-card.scss']
})
export class BadgesCard implements OnInit {
    @Input() badges : Badge[] | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }
}
