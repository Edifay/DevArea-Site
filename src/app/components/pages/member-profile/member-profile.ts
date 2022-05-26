import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {MemberService} from "../../../services/member.service";
import {tabs} from "../options/options";
import {MemberProfile} from "../../../models/member-profile";

@Component({
    selector: 'app-member-profile',
    templateUrl: './member-profile.html',
    styleUrls: ['./member-profile.scss']
})
export class MemberProfileComponent implements OnInit {

    tabs = tabs;

    public memberConnectedId: string | undefined;
    public member_profile: MemberProfile;
    public member_id: string | undefined;

    constructor(private httpClient: HttpClient, private route: ActivatedRoute, private service: MemberService, public router: Router) {
        this.member_profile = this.defaultMemberProfile();
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.member_id = params['member_id'];
            this.load();
        });

        this.service.memberInfos$.subscribe({
            next: (memberInfos) => this.memberConnectedId = memberInfos.id
        });
    }

    private load() {
        this.httpClient
            .get<MemberProfile>('/data/user-data/member-profile?member_id=' + this.member_id)
            .subscribe({
                next: (response) => {
                    if (response == null) {
                        console.log("Le serveur n'as pas pu trouver le membre recherché !")
                    } else {
                        this.member_profile = response;
                        this.injectDescription(this.member_profile.memberDescription)
                    }
                },
                error: (err) => {
                    console.log('Error : ', err);
                }
            });
    }


    private defaultMemberProfile(): MemberProfile {
        return {
            id: '0',
            urlAvatar: '/assets/images/reseaux/discord.png',
            name: 'Disconnected',
            tag: 'Disconnected#0000',
            rank: 0,
            xp: 0,
            previous_xp_level: 0,
            next_xp_level: 2,
            level: 1,
            memberDescription: undefined,
            missions_list: [
                {
                    title: "Title",
                    id: "0",
                    lastUpdate: "0",
                    description: "Default description.",
                    avatarURL: "",
                    budget: "0",
                }
            ],
            badges: [
                {
                    description: "description",
                    name: "Nom du badge",
                    url_icon: "https://www.magimix.com/webroot-mobile/img/loading.gif"
                }
            ]
        }
    }

    public openOptions() {
        this.router.navigate(['/', "options"]);
    }

    public injectDescription(str: string | undefined) {
        // @ts-ignore
        let match = str.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
        let final = str;
        // @ts-ignore
        match.map(url => {
            // @ts-ignore
            final = final.replace(url, "<a style='color: var(--main-color);'  href=\"" + url + "\" target=\"_BLANK\">" + url + "</a>")
        })
        let content = "<p id='description' style='word-break: break-word; white-space: pre-line; max-height: 400px; overflow: scroll;'>" + final + "</p>";
        content = content.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        let dom = new DOMParser().parseFromString(content, 'text/html')
        console.log(dom)
        let new_element = dom.body.firstElementChild;
        console.log(new_element)
        let main = document.getElementById("descriptionContainer");
        // @ts-ignore
        main.appendChild(new_element);
    }

    public status: number = tabs.Mission;

    public switch(tabs: number) {
        this.status = tabs;
    }

}
