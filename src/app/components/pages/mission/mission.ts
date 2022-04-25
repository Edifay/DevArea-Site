import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MissionContent} from "../../../models/missionContent";
import {HttpClient} from "@angular/common/http";
import {MemberService} from "../../../services/member.service";

@Component({
    selector: 'app-mission',
    templateUrl: './mission.html',
    styleUrls: ['./mission.scss']
})
export class Mission implements OnInit {

    private id: string | undefined;
    public mission: MissionContent = {
        title: "Title",
        description: "Default desciption !",
        budget: "0",
        deadLine: "none",
        language: "none",
        support: "none",
        level: "none",
        memberName: "Name",
        avatarURL: "",
        memberTag: "none",
        lastUpdate: "0",
        id: "0",
        createdAt: 0,
        memberID: ""
    };

    public memberID: any;
    private connected: string | undefined;

    constructor(private route: ActivatedRoute, private client: HttpClient, private memberService: MemberService, private router: Router) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.id = params['id'];
            console.log("Id : " + this.id);
            this.fetchMission();
        });

        this.memberID = this.memberService.memberInfos$.getValue().id;
        this.memberService.memberInfos$.subscribe(value => {
            this.memberID = value.id;
        });

        this.memberService.connected$.subscribe({
            next: (connected) => {
                this.connected = connected;
            }
        });

    }

    public fetchMission() {
        this.client.get<MissionContent>("data/missions/get" + "?id=" + this.id).subscribe(
            {
                next: (response) => {
                    this.mission = response;
                    console.log("Mission_memberID = " + this.mission.memberID, "MemberServiceID = " + this.memberID);
                }
            }
        )
    }

    public getCreationDate(): string {
        return "Créé le " + new Date(this.mission.createdAt).toLocaleDateString() + ".";
    }

    public loading = false;
    public took = false;

    public tookMission() {
        if (this.connected == "connected") {
            if (!this.loading) {
                this.loading = true;
                this.client.get<string[]>("data/missions/took" + "?missionID=" + this.mission.id + "&code=" + this.memberService.code).subscribe(
                    {
                        next: (response) => {
                            console.log(response);
                            if (response[0] == "Vous avez pris cette mission !" || response[0] == "Vous avez déjà pris cette commande !")
                                this.took = true;

                        },
                        error: (err) => {
                            console.log("Error : " + err)
                        },
                        complete: () => {
                            console.log("Complete !")
                            this.loading = false;
                        }
                    }
                )
            }
        } else
            this.router.navigate(['/', 'how-connect']);
    }

    public comfirm = false;

    public buttonDeleteClick() {
        this.comfirm = true;
    }

    public cancel() {
        this.comfirm = false;
    }

    public delete() {
        this.client.get<string[]>("data/missions/delete" + "?missionID=" + this.mission.id + "&code=" + this.memberService.code).subscribe(
            {
                next: (response) => {
                    console.log(response);
                    this.memberService.loadInfos();
                    this.router.navigate(['/', 'options']);
                },
                error: (err) => {
                    console.log("Error : " + err)

                },
                complete: () => {
                    console.log("Complete !")
                    this.loading = false;
                }
            }
        )
    }

}
