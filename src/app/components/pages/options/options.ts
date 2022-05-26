import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {MemberService} from "../../../services/member.service";
import {MemberInfos} from "../../../models/member-infos";

export enum tabs {
    Mission,
    Freelance,
}

@Component({
    selector: 'app-options',
    templateUrl: './options.html',
    styleUrls: ['./options.scss']
})
export class Options implements OnInit {

    memberInfos: MemberInfos | undefined;
    connected: any;

    tabs = tabs;

    public own_missions = "true";

    constructor(public service: MemberService, private http_client: HttpClient, private cookie: CookieService, private router: Router) {
    }

    public status: number = tabs.Mission;

    ngOnInit(): void {
        this.service.memberInfos$.subscribe({
            next: (memberInfos) => this.memberInfos = memberInfos
        });

        this.service.connected$.subscribe({
            next: (connected) => {
                this.connected = connected;
                if (this.connected == "not_connected")
                    this.router.navigate(['/', 'how-connect']);
            }
        });

    }

    public switch(tabs: number) {
        this.status = tabs;
    }

}
