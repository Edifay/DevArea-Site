import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
export class MemberProfileComponent implements AfterViewInit {

    private descriptionComponent!: ElementRef;

    @ViewChild('descriptionComponent') set content(content: ElementRef) {
        if (content) {
            this.descriptionComponent = content;
            if (this.member_profile && this.member_profile.memberDescription)
                this.injectDescription(this.member_profile.memberDescription);
        }
    }

    tabs = tabs;

    public memberConnectedId: string | undefined;
    public member_profile: MemberProfile | undefined;
    public member_id: string | undefined;

    constructor(private httpClient: HttpClient, private route: ActivatedRoute, private service: MemberService, public router: Router) {

    }

    ngAfterViewInit(): void {

    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.member_id = params['member_id'];
            this.load();
        });

        this.route.queryParams.subscribe(params => {
            let open = params['open'];
            if (open != undefined)
                this.status = open;
        });

        this.service.memberInfos$.subscribe({
            next: (memberInfos) => {
                if (memberInfos != undefined)
                    this.memberConnectedId = memberInfos.id
            }
        });
    }

    private load() {
        this.httpClient
            .get<MemberProfile>('/data/user-data/member-profile?member_id=' + this.member_id)
            .subscribe({
                next: (response) => {
                    if (response == null)
                        console.log("Le serveur n'as pas pu trouver le membre recherché !")
                    else
                        this.member_profile = response;

                },
                error: (err) => {
                    console.log('Error : ', err);
                }
            });
    }

    public openOptions() {
        this.router.navigate(['/', "options"], {
            queryParams: {
                open: this.status
            }
        });
    }

    public injectDescription(str: string) {
       /* let match = str.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);

        let final = str;
        if (match != null)
            match.map(url => {
                final = final.replace(url, "<a style='color: var(--main-color);'  href=\"" + url + "\" target=\"_BLANK\">" + url + "</a>")
            })
        else
            final = str;

        let content = "<span>" + final + "</span>";
        content = content.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        let new_element = new DOMParser().parseFromString(content, 'text/html').body.firstElementChild;

        this.descriptionComponent.nativeElement.append(new_element);*/
    }

    public status: number = tabs.Mission;

    public switch(tabs: number) {
        this.status = tabs;
        this.router.navigate(['/', "member-profile"], {
            queryParams: {
                member_id: this.member_id,
                open: this.status
            }
        });
    }

}
