import {Component, Input, OnInit} from '@angular/core';
import {MemberInfos} from "../../../../../models/member-infos";
import {MemberService} from "../../../../../services/member.service";
import {Mission} from "../../../mission/mission";
import {MissionContent} from "../../../../../models/missionContent";
import {MissionPreview} from "../../../../../models/missionPreview";

@Component({
    selector: 'app-missions-wiewer',
    templateUrl: './missions-wiewer.html',
    styleUrls: ['./missions-wiewer.scss']
})
export class MissionsWiewer implements OnInit {
    @Input() controller: boolean = false;
    @Input() missions: MissionPreview[] = [];


    constructor(private service: MemberService) {
    }

    ngOnInit(): void {

    }

}
