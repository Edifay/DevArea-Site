import {Component, Input, OnInit} from '@angular/core';
import {MemberInfos} from "../../../../../models/member-infos";
import {MemberService} from "../../../../../services/member.service";
import {Mission} from "../../../mission/mission";
import {MissionContent} from "../../../../../models/missionContent";
import {MissionPreview} from "../../../../../models/missionPreview";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-missions-wiewer',
    templateUrl: './missions-wiewer.html',
    styleUrls: ['./missions-wiewer.scss'],
    animations:[
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ opacity:0 }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ opacity:1 }))
            ])
        ])
    ]
})
export class MissionsWiewer implements OnInit {
    @Input() controller: boolean = false;
    @Input() missions: MissionPreview[] = [];


    constructor(private service: MemberService) {
    }

    ngOnInit(): void {

    }

}
