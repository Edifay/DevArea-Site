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

    tabs = tabs;

    public memberConnectedId: string | undefined;
    public member_profile: MemberProfile | undefined;
    public member_id: string | undefined;

    constructor(private httpClient: HttpClient, private route: ActivatedRoute, private service: MemberService, public router: Router) {

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

    public status: number = tabs.Mission;

    public switch(tabs: number) {
        this.status = tabs;
        /*this.router.navigate(['/', "member-profile"], {
            queryParams: {
                member_id: this.member_id,
                open: this.status
            }
        });*/
    }

  ngAfterViewInit(): void {
  }

}
